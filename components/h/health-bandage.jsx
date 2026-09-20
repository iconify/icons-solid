import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/byt1vbcft.css';
import '../../css/u/ue2etpb8g.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="byt1vbcft"/><path class="ue2etpb8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:health-bandage"} {...others} />);
}

export default Component;
