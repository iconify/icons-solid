import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvi257b1u.css';
import '../../css/k/kyxjq5b8z.css';
import '../../css/p/p_1scj-cu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vvi257b1u"/><path class="kyxjq5b8z"/><path class="p_1scj-cu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:cog"} {...others} />);
}

export default Component;
