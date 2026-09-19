import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9-n_p_wf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j9-n_p_wf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:battery-quarter-solid"} {...others} />);
}

export default Component;
