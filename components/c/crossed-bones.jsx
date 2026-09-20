import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/me81uw3xw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="me81uw3xw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:crossed-bones"} {...others} />);
}

export default Component;
