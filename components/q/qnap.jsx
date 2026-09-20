import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aymoarswq.css';
import '../../css/e/etmdw1btw.css';
import '../../css/k/ka2hejb0v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aymoarswq"/><path class="etmdw1btw"/><path class="ka2hejb0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:qnap"} {...others} />);
}

export default Component;
