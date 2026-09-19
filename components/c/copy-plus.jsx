import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jr1lh7bho.css';
import '../../css/y/yp-o87trv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jr1lh7bho"/><path class="yp-o87trv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:copy-plus"} {...others} />);
}

export default Component;
