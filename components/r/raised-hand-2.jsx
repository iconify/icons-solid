import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uymgdabjo.css';
import '../../css/k/k1t3p4t5p.css';
import '../../css/i/inkomlb9u.css';
import '../../css/f/fsip9nbyp.css';
import '../../css/o/op9bcu85a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uymgdabjo"/><path class="k1t3p4t5p"/><path class="inkomlb9u"/><path class="fsip9nbyp"/><path class="op9bcu85a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:raised-hand-2"} {...others} />);
}

export default Component;
