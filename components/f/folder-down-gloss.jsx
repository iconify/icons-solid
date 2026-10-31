import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hr6i36bzn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hr6i36bzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folder-down-gloss"} {...others} />);
}

export default Component;
