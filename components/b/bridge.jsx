import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hlnf44bvp.css';
import '../../css/n/nfe2dnbyj.css';
import '../../css/q/qx-gz1b8z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-primary-layer hlnf44bvp"/><path class="duoicon-secondary-layer nfe2dnbyj"/><path class="duoicon-primary-layer qx-gz1b8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:bridge"} {...others} />);
}

export default Component;
