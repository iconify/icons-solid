import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtx1xb55s.css';
import '../../css/w/wfevvhiis.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vtx1xb55s"/><path class="wfevvhiis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:message-plus-alt"} {...others} />);
}

export default Component;
