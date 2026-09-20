import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsic9tbse.css';
import '../../css/f/fr9wnwjpk.css';
import '../../css/c/c6vuqnbbq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lsic9tbse"/><path class="fr9wnwjpk"/><path class="c6vuqnbbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:re-director"} {...others} />);
}

export default Component;
