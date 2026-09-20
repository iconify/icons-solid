import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3ti-bn3p.css';
import '../../css/g/gjagohdeb.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="i3ti-bn3p"/><path class="gjagohdeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:calendar"} {...others} />);
}

export default Component;
