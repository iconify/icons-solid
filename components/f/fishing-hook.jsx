import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gq4x5-y3m.css';
import '../../css/h/hztwgh1lv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gq4x5-y3m"/><path class="hztwgh1lv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:fishing-hook"} {...others} />);
}

export default Component;
