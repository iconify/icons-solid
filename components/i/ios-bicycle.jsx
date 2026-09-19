import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bv9o7hb4h.css';
import '../../css/b/bpl-meb0s.css';
import '../../css/i/ic--wlbit.css';
import '../../css/p/pmf4o37fj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bv9o7hb4h"/><path class="bpl-meb0s"/><path class="ic--wlbit"/><path class="pmf4o37fj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-bicycle"} {...others} />);
}

export default Component;
