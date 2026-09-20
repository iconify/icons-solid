import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0ulh_r9o.css';
import '../../css/f/f_rwg-r9r.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="a0ulh_r9o"/><path class="f_rwg-r9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:grav"} {...others} />);
}

export default Component;
