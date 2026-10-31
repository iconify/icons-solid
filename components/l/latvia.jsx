import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgxr_vbkp.css';
import '../../css/e/e6hapgbjm.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="dgxr_vbkp"/><path class="e6hapgbjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:latvia"} {...others} />);
}

export default Component;
