import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogoznx9lr.css';
import '../../css/m/mabwzbbvc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ogoznx9lr"/><path class="mabwzbbvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:plus-circle"} {...others} />);
}

export default Component;
