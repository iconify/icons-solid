import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n77f96bvl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n77f96bvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:cloud-moon"} {...others} />);
}

export default Component;
