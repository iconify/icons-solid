import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oc7q_ob4j.css';
import '../../css/o/oig-r-nkk.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="oc7q_ob4j"/><path class="oig-r-nkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:flag-b"} {...others} />);
}

export default Component;
