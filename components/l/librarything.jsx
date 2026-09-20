import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uq-vo4ugb.css';
import '../../css/l/lhs-_ebhv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uq-vo4ugb"/><path class="lhs-_ebhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:librarything"} {...others} />);
}

export default Component;
