import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/th6q-fb2o.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="th6q-fb2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:couch"} {...others} />);
}

export default Component;
