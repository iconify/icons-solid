import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mbtde-eiv.css';
import '../../css/h/hyrwp_buz.css';

const viewBox = {"width":1024,"height":1024};
const content = `<g class="n1lsf0bnc"><path class="mbtde-eiv"/><path class="hyrwp_buz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:merge-outlined"} {...others} />);
}

export default Component;
