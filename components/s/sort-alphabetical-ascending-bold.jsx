import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cdfu06-uh.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="cdfu06-uh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:sort-alphabetical-ascending-bold"} {...others} />);
}

export default Component;
