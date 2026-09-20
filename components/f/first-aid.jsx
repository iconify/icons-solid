import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a09o_zzmo.css';
import '../../css/c/ckct19qqs.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="a09o_zzmo"/><path class="ckct19qqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:first-aid"} {...others} />);
}

export default Component;
