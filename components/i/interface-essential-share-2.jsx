import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n19_18s0x.css';
import '../../css/e/ee3e3_fof.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n19_18s0x"/><path class="ee3e3_fof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-share-2"} {...others} />);
}

export default Component;
