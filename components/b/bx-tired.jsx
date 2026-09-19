import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmu3bk6pi.css';
import '../../css/w/wqbkv8u2i.css';
import '../../css/k/k31e-btyh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fmu3bk6pi"/><path class="wqbkv8u2i"/><path class="k31e-btyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-tired"} {...others} />);
}

export default Component;
