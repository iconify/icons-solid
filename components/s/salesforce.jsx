import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ypa2l2sjm.css';
import '../../css/l/lymew2x1z.css';
import '../../css/o/o8js7wtch.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ypa2l2sjm"/><path class="lymew2x1z"/><path class="o8js7wtch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:salesforce"} {...others} />);
}

export default Component;
