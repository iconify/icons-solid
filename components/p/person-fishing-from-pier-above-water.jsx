import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhezw0uiz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="mhezw0uiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-fishing-from-pier-above-water"} {...others} />);
}

export default Component;
