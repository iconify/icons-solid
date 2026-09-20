import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oam-6ybfc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="oam-6ybfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:trail-blaze"} {...others} />);
}

export default Component;
