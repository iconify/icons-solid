import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqbkv8u2i.css';
import '../../css/z/ze9xnfzdp.css';
import '../../css/q/q26grc28u.css';
import '../../css/p/pv95gbcho.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wqbkv8u2i"/><circle class="ze9xnfzdp"/><circle class="q26grc28u"/><path class="pv95gbcho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-meh"} {...others} />);
}

export default Component;
