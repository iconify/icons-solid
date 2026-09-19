import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2jmd4b_y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k2jmd4b_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:building-alt-05-filled"} {...others} />);
}

export default Component;
