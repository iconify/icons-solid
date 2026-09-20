import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iiq3suo0o.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="iiq3suo0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:data-management"} {...others} />);
}

export default Component;
