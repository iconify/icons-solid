import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oc7q_ob4j.css';
import '../../css/o/o7vd0ghvf.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="oc7q_ob4j"/><path class="o7vd0ghvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:flab-b-o"} {...others} />);
}

export default Component;
