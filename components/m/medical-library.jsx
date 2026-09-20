import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy5by7b9g.css';
import '../../css/g/gld9kyb4d.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="jy5by7b9g"/><path class="gld9kyb4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:medical-library"} {...others} />);
}

export default Component;
