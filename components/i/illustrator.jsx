import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmryhwkxv.css';
import '../../css/b/b1c8iacsb.css';
import '../../css/n/nxqynyklf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tmryhwkxv"/><path class="b1c8iacsb"/><path class="nxqynyklf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:illustrator"} {...others} />);
}

export default Component;
