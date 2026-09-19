import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jw5nfdb1w.css';
import '../../css/n/nj83mcbyz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jw5nfdb1w"/><path class="nj83mcbyz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dishwasher"} {...others} />);
}

export default Component;
