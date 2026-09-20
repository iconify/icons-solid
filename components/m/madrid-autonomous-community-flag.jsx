import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dokdgubsd.css';
import '../../css/c/c-zrgpb5l.css';
import '../../css/x/x544m-ffw.css';
import '../../css/c/c8ov0mbpt.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dokdgubsd"/><g class="c-zrgpb5l"><path class="x544m-ffw"/><path class="c8ov0mbpt"/></g><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:madrid-autonomous-community-flag"} {...others} />);
}

export default Component;
