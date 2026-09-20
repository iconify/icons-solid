import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5u-w0b6n.css';
import '../../css/j/jj22oxbjh.css';

const viewBox = {"width":1550,"height":971};
const content = `<path class="l5u-w0b6n"/><path class="jj22oxbjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mondelez-international-light"} {...others} />);
}

export default Component;
