import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jt4irjb1z.css';
import '../../css/j/j1l1dn0pt.css';
import '../../css/f/fzlvvvb1y.css';
import '../../css/n/na016ccky.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jt4irjb1z wm-a"/><path class="j1l1dn0pt wm-k"/><path class="fzlvvvb1y wm-k"/><path class="na016ccky wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cup-soda"} {...others} />);
}

export default Component;
