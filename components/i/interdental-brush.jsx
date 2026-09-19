import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0engwkmh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="f0engwkmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:interdental-brush"} {...others} />);
}

export default Component;
