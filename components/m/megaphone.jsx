import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkn1q5bew.css';

const viewBox = {"width":40,"height":32};
const content = `<path class="kkn1q5bew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:megaphone"} {...others} />);
}

export default Component;
