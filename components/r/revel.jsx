import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p12ryjbsv.css';
import '../../css/k/k5azw7b6j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p12ryjbsv"/><path class="k5azw7b6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:revel"} {...others} />);
}

export default Component;
