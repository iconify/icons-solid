import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xoco9ob4a.css';
import '../../css/s/sa1x33xzo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xoco9ob4a"/><path class="sa1x33xzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:hospital-circle-fill"} {...others} />);
}

export default Component;
