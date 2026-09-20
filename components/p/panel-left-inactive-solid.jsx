import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nj499ub0e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nj499ub0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:panel-left-inactive-solid"} {...others} />);
}

export default Component;
