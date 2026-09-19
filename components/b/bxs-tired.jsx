import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/frzl9ub9d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="frzl9ub9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-tired"} {...others} />);
}

export default Component;
