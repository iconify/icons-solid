import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxq523bui.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oxq523bui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:arrow-right-square-fill"} {...others} />);
}

export default Component;
