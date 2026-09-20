import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dluyn9c8v.css';
import '../../css/g/gj051ober.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dluyn9c8v"/><path class="gj051ober"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:business-products-bag"} {...others} />);
}

export default Component;
