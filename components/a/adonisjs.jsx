import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-2tvnb7t.css';

const viewBox = {"width":128,"height":128};
const content = `<path clip-rule="evenodd" class="n-2tvnb7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:adonisjs"} {...others} />);
}

export default Component;
