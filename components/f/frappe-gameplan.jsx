import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/so3tt3b9a.css';
import '../../css/y/yk8mxxbue.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="so3tt3b9a"/><path class="yk8mxxbue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:frappe-gameplan"} {...others} />);
}

export default Component;
