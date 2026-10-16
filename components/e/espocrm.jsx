import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fe1t213fe.css';
import '../../css/o/o3xf0rsxp.css';

const viewBox = {"width":8.467,"height":8.467};
const content = `<circle class="fe1t213fe"/><path class="o3xf0rsxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:espocrm"} {...others} />);
}

export default Component;
