import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/znfwbkb8v.css';
import '../../css/p/pqx863b7a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="znfwbkb8v"/><path class="pqx863b7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:buildings"} {...others} />);
}

export default Component;
