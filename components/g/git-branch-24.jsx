import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwsh51bpk.css';
import '../../css/u/ungwd2b5z.css';
import '../../css/r/rj032db8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wwsh51bpk"/><path class="ungwd2b5z"/><path class="rj032db8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:git-branch-24"} {...others} />);
}

export default Component;
