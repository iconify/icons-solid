import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hs11npbhs.css';
import '../../css/d/dyttjhj6k.css';
import '../../css/i/ilz0n-b6y.css';
import '../../css/c/c-gqvg2ew.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hs11npbhs"/><path class="dyttjhj6k"/><path class="ilz0n-b6y"/><path class="c-gqvg2ew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lidbrainz"} {...others} />);
}

export default Component;
