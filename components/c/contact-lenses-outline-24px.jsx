import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_i-_ub5v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r_i-_ub5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:contact-lenses-outline-24px"} {...others} />);
}

export default Component;
