import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/z/zv2lonbaf.css';
import '../../css/z/zk9irlbmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="zv2lonbaf"/><path class="zk9irlbmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive-import"} {...others} />);
}

export default Component;
