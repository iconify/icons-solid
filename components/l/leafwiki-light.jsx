import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umcwb9b6g.css';
import '../../css/q/qxpwau_nq.css';
import '../../css/e/e6t39e56c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="umcwb9b6g"/><path class="qxpwau_nq"/><path class="e6t39e56c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:leafwiki-light"} {...others} />);
}

export default Component;
