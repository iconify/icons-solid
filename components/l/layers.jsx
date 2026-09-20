import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-oz6hbkx.css';

const viewBox = {"width":24,"height":24,"left":-1.5,"top":-4};
const content = `<path class="p-oz6hbkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:layers"} {...others} />);
}

export default Component;
