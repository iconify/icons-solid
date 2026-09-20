import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqbx_ob3b.css';
import '../../css/u/uxebd5iiq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uqbx_ob3b"/><path class="uxebd5iiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:book"} {...others} />);
}

export default Component;
