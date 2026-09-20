import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8eaf2bky.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path clip-rule="evenodd" class="s8eaf2bky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:github-light"} {...others} />);
}

export default Component;
