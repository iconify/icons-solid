import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oom6lfvzo.css';
import '../../css/s/s1yxkv7dc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oom6lfvzo"/><path class="s1yxkv7dc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:stopwatch-duotone"} {...others} />);
}

export default Component;
