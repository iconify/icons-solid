import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1eq-d3wu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a1eq-d3wu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:bus-night"} {...others} />);
}

export default Component;
