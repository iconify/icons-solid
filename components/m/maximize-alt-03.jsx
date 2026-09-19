import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0gdh4bxy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r0gdh4bxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:maximize-alt-03"} {...others} />);
}

export default Component;
