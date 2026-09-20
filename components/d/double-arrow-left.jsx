import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkljacc9y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rkljacc9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:double-arrow-left"} {...others} />);
}

export default Component;
