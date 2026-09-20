import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mf-x9x4-a.css';
import '../../css/j/j2fntcc6i.css';

const viewBox = {"width":63,"height":64};
const content = `<path class="mf-x9x4-a"/><path class="j2fntcc6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:elevators"} {...others} />);
}

export default Component;
