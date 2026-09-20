import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyuwmlbix.css';

const viewBox = {"width":263.352,"height":46.74};
const content = `<path class="jyuwmlbix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sony-group"} {...others} />);
}

export default Component;
