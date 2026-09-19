import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yltp1rbuh.css';
import '../../css/d/drnbxkbxp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer yltp1rbuh"/><path class="drnbxkbxp duoicon-primary-layer"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:user-card"} {...others} />);
}

export default Component;
