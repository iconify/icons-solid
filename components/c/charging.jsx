import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/h/hu79y9bml.css';
import '../../css/l/lzoae595u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="hu79y9bml"/><path class="lzoae595u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:charging"} {...others} />);
}

export default Component;
