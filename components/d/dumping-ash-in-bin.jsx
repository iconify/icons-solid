import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/og-e6ibfc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="og-e6ibfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:dumping-ash-in-bin"} {...others} />);
}

export default Component;
