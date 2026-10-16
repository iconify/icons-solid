import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-5s4sbum.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i-5s4sbum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:warning-octagon-multiple"} {...others} />);
}

export default Component;
