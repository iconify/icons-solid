import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twdnpfg0c.css';
import '../../css/q/qpq0ojcwu.css';
import '../../css/i/i36mrlb_i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="twdnpfg0c"/><path class="qpq0ojcwu"/><path class="i36mrlb_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:food-drink-pizza"} {...others} />);
}

export default Component;
