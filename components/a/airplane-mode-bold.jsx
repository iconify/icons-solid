import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdxt6vsyf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zdxt6vsyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:airplane-mode-bold"} {...others} />);
}

export default Component;
