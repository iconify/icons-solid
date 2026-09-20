import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8oo03bfv.css';
import '../../css/o/o9-v1yxgr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s8oo03bfv"/><path class="o9-v1yxgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:user-cog-light"} {...others} />);
}

export default Component;
