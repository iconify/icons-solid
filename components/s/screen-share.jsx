import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cvob-4bwx.css';
import '../../css/g/gf4gil12a.css';
import '../../css/v/v-0n55bdp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="cvob-4bwx"/><path class="gf4gil12a"/><path class="v-0n55bdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:screen-share"} {...others} />);
}

export default Component;
