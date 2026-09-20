import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rk6i8-bza.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rk6i8-bza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:axe-and-firewood-pile"} {...others} />);
}

export default Component;
