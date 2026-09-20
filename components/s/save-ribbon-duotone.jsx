import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iig0ngsil.css';
import '../../css/f/f3oom5dbo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iig0ngsil"/><path class="f3oom5dbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:save-ribbon-duotone"} {...others} />);
}

export default Component;
