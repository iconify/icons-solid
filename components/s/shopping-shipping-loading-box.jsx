import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebc7d1mqz.css';
import '../../css/j/j4kat4bzg.css';
import '../../css/o/oh9bdxpde.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ebc7d1mqz"/><path class="j4kat4bzg"/><path class="oh9bdxpde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:shopping-shipping-loading-box"} {...others} />);
}

export default Component;
