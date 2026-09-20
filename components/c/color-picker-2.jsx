import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqh4zbbpb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wqh4zbbpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:color-picker-2"} {...others} />);
}

export default Component;
