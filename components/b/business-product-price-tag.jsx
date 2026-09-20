import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bplaobd3f.css';
import '../../css/x/x7qp0hbws.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bplaobd3f"/><path class="x7qp0hbws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:business-product-price-tag"} {...others} />);
}

export default Component;
