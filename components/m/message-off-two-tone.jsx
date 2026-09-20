import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d716e6bqm.css';
import '../../css/a/azo89xd7t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d716e6bqm"/><path class="azo89xd7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:message-off-two-tone"} {...others} />);
}

export default Component;
