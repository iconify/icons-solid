import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2ds99bls.css';
import '../../css/y/yurlis35z.css';
import '../../css/b/b93z67b5r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v2ds99bls"/><path class="yurlis35z"/><path class="b93z67b5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mailrise-dark"} {...others} />);
}

export default Component;
