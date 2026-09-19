import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arrq9cbru.css';
import '../../css/d/d08_cxnnu.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="arrq9cbru"/><path class="d08_cxnnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:javascript"} {...others} />);
}

export default Component;
