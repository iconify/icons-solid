import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p61-0ivql.css';
import '../../css/r/r73utib8z.css';
import '../../css/e/e_6_n4b0n.css';
import '../../css/m/m2kw6abql.css';
import '../../css/d/dw8ilhbpb.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="p61-0ivql"/><path class="r73utib8z"/><path class="e_6_n4b0n"/><path class="m2kw6abql"/><path class="dw8ilhbpb"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-egypt"} {...others} />);
}

export default Component;
