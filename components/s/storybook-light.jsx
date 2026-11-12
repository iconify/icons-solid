import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0uvq1byx.css';
import '../../css/h/hijad5bip.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r0uvq1byx"/><path class="hijad5bip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:storybook-light"} {...others} />);
}

export default Component;
