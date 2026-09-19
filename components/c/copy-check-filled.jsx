import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yft_2jb0w.css';
import '../../css/t/t476j_etv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yft_2jb0w"/><path class="t476j_etv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:copy-check-filled"} {...others} />);
}

export default Component;
