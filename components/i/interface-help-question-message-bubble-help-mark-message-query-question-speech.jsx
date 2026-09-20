import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ruhmssb4g.css';
import '../../css/f/f9g6pqpws.css';
import '../../css/s/sdn94xi5p.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ruhmssb4g"/><path class="f9g6pqpws"/><path class="sdn94xi5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-help-question-message-bubble-help-mark-message-query-question-speech"} {...others} />);
}

export default Component;
