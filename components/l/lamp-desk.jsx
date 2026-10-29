import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/caowrub0w.css';
import '../../css/c/cpokscb7n.css';
import '../../css/p/p76s76b_a.css';
import '../../css/b/b6ptmwbjy.css';
import '../../css/a/abhwlf8fr.css';
import '../../css/e/ex3zzhbry.css';
import '../../css/y/yq8-s1t9w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="caowrub0w wm-shadow"/><path class="cpokscb7n"/><path class="p76s76b_a"/><path class="b6ptmwbjy"/><path class="abhwlf8fr"/><path class="ex3zzhbry wm-shine"/><path class="yq8-s1t9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:lamp-desk"} {...others} />);
}

export default Component;
