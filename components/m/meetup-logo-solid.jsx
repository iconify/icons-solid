import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xi105ybas.css';
import '../../css/c/cp_8-04cn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xi105ybas"/><path class="cp_8-04cn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:meetup-logo-solid"} {...others} />);
}

export default Component;
