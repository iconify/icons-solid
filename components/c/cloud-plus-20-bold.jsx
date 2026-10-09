import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z55jyj2un.css';
import '../../css/k/kndjxwbkd.css';
import '../../css/o/ol_xz9rkq.css';
import '../../css/z/ziqho5b-f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z55jyj2un"/><path class="kndjxwbkd"/><path class="ol_xz9rkq"/><path class="ziqho5b-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cloud-plus-20-bold"} {...others} />);
}

export default Component;
