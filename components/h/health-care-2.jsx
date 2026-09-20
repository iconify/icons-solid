import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qnjb_7x4p.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="qnjb_7x4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:health-care-2"} {...others} />);
}

export default Component;
