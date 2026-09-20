import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcv3qbcsb.css';
import '../../css/z/zq4712bmn.css';

const viewBox = {"width":269.567,"height":153.532};
const content = `<path class="kcv3qbcsb"/><path class="zq4712bmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:amazon-fire-tv"} {...others} />);
}

export default Component;
