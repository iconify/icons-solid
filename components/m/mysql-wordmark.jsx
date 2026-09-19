import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tlnshvmru.css';
import '../../css/p/paw_-0u1j.css';
import '../../css/u/uc8gne65u.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="tlnshvmru"/><path class="paw_-0u1j"/><path class="uc8gne65u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:mysql-wordmark"} {...others} />);
}

export default Component;
