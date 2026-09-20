import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blowczb_d.css';
import '../../css/e/e4jz-uehp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="blowczb_d"/><path class="e4jz-uehp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:other-ui-maximize"} {...others} />);
}

export default Component;
