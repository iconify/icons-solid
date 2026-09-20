import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4_xc7txx.css';

const viewBox = {"width":104.5,"height":68};
const content = `<path clip-rule="evenodd" class="o4_xc7txx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:babbel"} {...others} />);
}

export default Component;
