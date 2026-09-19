import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ld5kc0m-n.css';
import '../../css/x/xfs_8ebyg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ld5kc0m-n"/><path class="xfs_8ebyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:play-skip-back-circle-outline"} {...others} />);
}

export default Component;
