import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/re49dk2cy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="re49dk2cy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:message-1-ai-line"} {...others} />);
}

export default Component;
