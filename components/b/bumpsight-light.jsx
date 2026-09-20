import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eo9cc-xor.css';
import '../../css/r/rd8e13qsa.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="eo9cc-xor"/><path class="rd8e13qsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bumpsight-light"} {...others} />);
}

export default Component;
