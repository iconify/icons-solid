import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7p7ftetp.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="z7p7ftetp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:arrow-bottom-right-beside-arrow-bottom-left-above-arrow-top-right-beside-arrow-top-left"} {...others} />);
}

export default Component;
