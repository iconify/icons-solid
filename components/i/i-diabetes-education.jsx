import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ownc4obbs.css';
import '../../css/w/w0z-12ljo.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ownc4obbs"/><path class="w0z-12ljo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-diabetes-education"} {...others} />);
}

export default Component;
