import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3fa7zbhj.css';
import '../../css/p/p5t4w3b7i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l3fa7zbhj"/><path class="p5t4w3b7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:view-square-bold"} {...others} />);
}

export default Component;
