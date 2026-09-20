import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_y2z3b_y.css';
import '../../css/u/ui03rkztx.css';
import '../../css/z/z9vc1bj-r.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="i_y2z3b_y"/><path class="ui03rkztx"/><path class="z9vc1bj-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:intensive-care"} {...others} />);
}

export default Component;
