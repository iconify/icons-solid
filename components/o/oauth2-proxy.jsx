import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v5l22r1br.css';
import '../../css/j/jsjj4vbkz.css';
import '../../css/b/baxhqnbgk.css';
import '../../css/p/ppetvt7ab.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v5l22r1br"/><path class="jsjj4vbkz"/><path class="baxhqnbgk"/><path class="ppetvt7ab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:oauth2-proxy"} {...others} />);
}

export default Component;
