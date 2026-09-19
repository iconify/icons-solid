import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhok3cb9s.css';
import '../../css/o/ob_nbubvj.css';
import '../../css/m/m2huwebvz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yhok3cb9s"/><circle class="ob_nbubvj"/><path class="m2huwebvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:map"} {...others} />);
}

export default Component;
