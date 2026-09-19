import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2g2swbim.css';
import '../../css/f/f471phb4s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d2g2swbim"/><path class="f471phb4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:basket-outline"} {...others} />);
}

export default Component;
