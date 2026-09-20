import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpy9h52dg.css';
import '../../css/b/b9rr1pb9p.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="hpy9h52dg"/><path class="b9rr1pb9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:basic-ui-hide"} {...others} />);
}

export default Component;
