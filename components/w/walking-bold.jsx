import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9o-8lbqq.css';
import '../../css/f/f9lebcb9u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h9o-8lbqq"/><path clip-rule="evenodd" class="f9lebcb9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:walking-bold"} {...others} />);
}

export default Component;
