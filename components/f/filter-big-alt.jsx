import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/b/bk5i81qzz.css';
import '../../css/y/y49iyxskd.css';
import '../../css/f/f8yqsxb0s.css';
import '../../css/o/oowvvkbwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><circle transform="rotate(90 7 7)" class="bk5i81qzz"/><path class="y49iyxskd"/><circle transform="matrix(0 1 1 0 14 14)" class="f8yqsxb0s"/><path class="oowvvkbwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:filter-big-alt"} {...others} />);
}

export default Component;
