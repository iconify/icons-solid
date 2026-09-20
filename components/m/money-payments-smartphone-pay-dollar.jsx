import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekdmi3b6m.css';
import '../../css/l/l3_41-7cz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ekdmi3b6m"/><path class="l3_41-7cz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:money-payments-smartphone-pay-dollar"} {...others} />);
}

export default Component;
