import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzdld6fdb.css';
import '../../css/a/a1kinh57h.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gzdld6fdb"/><circle class="a1kinh57h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:vlan-ibm"} {...others} />);
}

export default Component;
