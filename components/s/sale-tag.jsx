import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yoegt1bvo.css';

const viewBox = {"width":464,"height":496};
const content = `<path class="yoegt1bvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:sale-tag"} {...others} />);
}

export default Component;
