import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mo96hdctd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mo96hdctd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:code-square"} {...others} />);
}

export default Component;
