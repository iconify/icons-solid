import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncjysacrn.css';
import '../../css/i/ialpo-rom.css';
import '../../css/f/fks66gnvh.css';
import '../../css/d/d6a34cbvy.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="ncjysacrn"/><path class="ialpo-rom"/><circle class="fks66gnvh"/><circle class="d6a34cbvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:bad"} {...others} />);
}

export default Component;
