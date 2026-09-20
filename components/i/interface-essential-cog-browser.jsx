import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z84met-5h.css';
import '../../css/n/nr3dqcmlz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="z84met-5h"/><path class="nr3dqcmlz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-cog-browser"} {...others} />);
}

export default Component;
