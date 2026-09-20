import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hylio2wag.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hylio2wag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:sailboat-on-water"} {...others} />);
}

export default Component;
