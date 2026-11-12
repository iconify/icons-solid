import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arfxhzlpu.css';
import '../../css/o/oxu08acul.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="arfxhzlpu"/><path class="oxu08acul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:minimus"} {...others} />);
}

export default Component;
