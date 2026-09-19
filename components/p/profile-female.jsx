import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/reejdb5eg.css';

const viewBox = {"width":36,"height":32};
const content = `<path class="reejdb5eg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:profile-female"} {...others} />);
}

export default Component;
