import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b84h5jsba.css';
import '../../css/l/l9-hh0blx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b84h5jsba"/><path class="l9-hh0blx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-engineering-systems-design-rhapsody-sn2"} {...others} />);
}

export default Component;
