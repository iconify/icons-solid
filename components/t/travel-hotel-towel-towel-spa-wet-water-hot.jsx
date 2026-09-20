import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxmp01xwc.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="yxmp01xwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-hotel-towel-towel-spa-wet-water-hot"} {...others} />);
}

export default Component;
