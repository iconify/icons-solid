import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cm_2psbxc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="cm_2psbxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:japanese-teacup"} {...others} />);
}

export default Component;
