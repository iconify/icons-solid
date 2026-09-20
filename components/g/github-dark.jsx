import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9mf81bli.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path clip-rule="evenodd" class="m9mf81bli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:github-dark"} {...others} />);
}

export default Component;
