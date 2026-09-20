import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zawatokrf.css';
import '../../css/l/lb8np0b7b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zawatokrf"/><path class="lb8np0b7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:food-drink-fried-chicken"} {...others} />);
}

export default Component;
