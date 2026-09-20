import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwj4ck9iz.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="uwj4ck9iz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:distribute-objects-vertically"} {...others} />);
}

export default Component;
