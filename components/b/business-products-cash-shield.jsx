import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufnwq-rji.css';
import '../../css/v/v5r6fq7ye.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ufnwq-rji"/><path class="v5r6fq7ye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:business-products-cash-shield"} {...others} />);
}

export default Component;
