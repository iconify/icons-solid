import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6r3qwg2u.css';

const viewBox = {"width":16,"height":9};
const content = `<path class="f6r3qwg2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:caretdown"} {...others} />);
}

export default Component;
