import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ct4cg4b-y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ct4cg4b-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-bold"} {...others} />);
}

export default Component;
