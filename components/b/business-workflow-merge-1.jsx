import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9s103bcs.css';
import '../../css/n/n3xy1-b1l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r9s103bcs"/><path class="n3xy1-b1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:business-workflow-merge-1"} {...others} />);
}

export default Component;
