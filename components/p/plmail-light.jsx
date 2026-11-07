import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2n33z6pt.css';
import '../../css/d/dr_uzfb-x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f2n33z6pt"/><path class="dr_uzfb-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:plmail-light"} {...others} />);
}

export default Component;
