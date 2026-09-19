import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w84vznkgo.css';
import '../../css/i/idwhcabqv.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="w84vznkgo"/><path class="idwhcabqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:invert-mode"} {...others} />);
}

export default Component;
