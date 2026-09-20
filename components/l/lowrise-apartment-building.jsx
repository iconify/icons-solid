import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qo_ch73fs.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qo_ch73fs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:lowrise-apartment-building"} {...others} />);
}

export default Component;
