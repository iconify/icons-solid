import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/c/caaopxbqh.css';
import '../../css/j/jwqcccb5s.css';
import '../../css/y/y64anccgt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGshkq9dKK"><g class="rohhhzb0l"><path class="caaopxbqh"/><circle class="jwqcccb5s"/><circle class="y64anccgt"/></g></mask></defs><path mask="url(#SVGshkq9dKK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:shopping-cart-two"} {...others} />);
}

export default Component;
