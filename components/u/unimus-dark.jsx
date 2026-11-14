import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/botwy-b2l.css';
import '../../css/i/icimvxwqo.css';
import '../../css/j/j9bcembrm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="botwy-b2l"/><path class="icimvxwqo"/><path class="j9bcembrm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:unimus-dark"} {...others} />);
}

export default Component;
