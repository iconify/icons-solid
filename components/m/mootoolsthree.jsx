import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxee2fbbd.css';

const viewBox = {"width":961,"height":1025};
const content = `<path class="cxee2fbbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:mootoolsthree"} {...others} />);
}

export default Component;
