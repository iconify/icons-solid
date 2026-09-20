import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c22bshnsy.css';
import '../../css/j/j0hahwblx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c22bshnsy"/><path class="j0hahwblx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:money-payments-accounting-calculator"} {...others} />);
}

export default Component;
