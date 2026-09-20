import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9sagjzat.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="l9sagjzat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:seaplane-on-water"} {...others} />);
}

export default Component;
