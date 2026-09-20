import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y38j07b8s.css';
import '../../css/g/gco7s4pcr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="y38j07b8s"/><path class="gco7s4pcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:shopping-furniture"} {...others} />);
}

export default Component;
