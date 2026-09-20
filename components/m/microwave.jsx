import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s0w46hbdt.css';
import '../../css/p/pinhulbxs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s0w46hbdt"/><path class="pinhulbxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:microwave"} {...others} />);
}

export default Component;
