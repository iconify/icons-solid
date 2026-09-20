import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qn1n6ybcu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qn1n6ybcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:maximize"} {...others} />);
}

export default Component;
