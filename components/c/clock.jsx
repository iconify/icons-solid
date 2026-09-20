import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mabwzbbvc.css';
import '../../css/a/a1sqeabop.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mabwzbbvc"/><path class="a1sqeabop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:clock"} {...others} />);
}

export default Component;
