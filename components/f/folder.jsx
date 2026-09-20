import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fd6hn1tbd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fd6hn1tbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mi:folder"} {...others} />);
}

export default Component;
