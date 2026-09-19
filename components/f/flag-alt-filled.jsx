import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/us0n5v1sk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="us0n5v1sk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:flag-alt-filled"} {...others} />);
}

export default Component;
