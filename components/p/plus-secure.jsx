import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkw2z3lzs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gkw2z3lzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:plus-secure"} {...others} />);
}

export default Component;
