import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqbkv8u2i.css';
import '../../css/l/lml2oc9mw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wqbkv8u2i"/><path class="lml2oc9mw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:chevron-up-circle"} {...others} />);
}

export default Component;
