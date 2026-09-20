import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vplm-nswe.css';
import '../../css/o/oplsioe0u.css';

const viewBox = {"width":16,"height":15};
const content = `<path class="vplm-nswe"/><path class="oplsioe0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:envelope-solid"} {...others} />);
}

export default Component;
