import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5n7r2czb.css';
import '../../css/m/muo8ifbsh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k5n7r2czb"/><path class="muo8ifbsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:computers-devices-electronics-mouse"} {...others} />);
}

export default Component;
