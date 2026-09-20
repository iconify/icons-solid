import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p12ryjbsv.css';
import '../../css/w/wsiqudq8g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p12ryjbsv"/><path class="wsiqudq8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:revel"} {...others} />);
}

export default Component;
