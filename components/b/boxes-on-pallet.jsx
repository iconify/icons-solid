import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipj9a1b-p.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ipj9a1b-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:boxes-on-pallet"} {...others} />);
}

export default Component;
