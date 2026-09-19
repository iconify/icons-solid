import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rp0e_-bcb.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="rp0e_-bcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:fliphorizontal"} {...others} />);
}

export default Component;
