import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9kaf_5zk.css';
import '../../css/c/c1og96bbt.css';
import '../../css/u/une2r8bxj.css';
import '../../css/j/j41oirkjh.css';
import '../../css/q/qhuuqtzwl.css';
import '../../css/a/aylubtbvn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g9kaf_5zk"/><path class="c1og96bbt"/><path class="une2r8bxj"/><path class="j41oirkjh"/><path class="qhuuqtzwl"/><path class="aylubtbvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:paginate-filter-5"} {...others} />);
}

export default Component;
