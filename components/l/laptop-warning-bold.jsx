import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_ggsobwy.css';
import '../../css/g/gxkm953bo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g_ggsobwy"/><path class="gxkm953bo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:laptop-warning-bold"} {...others} />);
}

export default Component;
