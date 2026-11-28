import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wt1z6xbjk.css';
import '../../css/p/plng_wb5t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary wt1z6xbjk"/><path class="plng_wb5t primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:flow-off-page-duo"} {...others} />);
}

export default Component;
