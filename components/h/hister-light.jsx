import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yup-t7bvl.css';
import '../../css/m/m0sn3w28b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yup-t7bvl"/><path class="m0sn3w28b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hister-light"} {...others} />);
}

export default Component;
