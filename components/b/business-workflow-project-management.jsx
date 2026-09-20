import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wc_6ewbba.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wc_6ewbba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:business-workflow-project-management"} {...others} />);
}

export default Component;
