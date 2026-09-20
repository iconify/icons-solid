import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pst0mi77l.css';
import '../../css/b/bhja3k33r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pst0mi77l"/><path class="bhja3k33r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:cog-duotone"} {...others} />);
}

export default Component;
