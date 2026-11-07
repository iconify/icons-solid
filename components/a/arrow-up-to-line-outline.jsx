import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqe-1p3yw.css';
import '../../css/o/ohna_rbrt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yqe-1p3yw"/><path class="ohna_rbrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-up-to-line-outline"} {...others} />);
}

export default Component;
