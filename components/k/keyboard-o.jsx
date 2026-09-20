import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hp87_jb1i.css';
import '../../css/p/p8ldtcc9g.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hp87_jb1i"/><path class="p8ldtcc9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:keyboard-o"} {...others} />);
}

export default Component;
