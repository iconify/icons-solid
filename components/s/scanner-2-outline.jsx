import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bj827-b1b.css';
import '../../css/g/grci_abjh.css';
import '../../css/r/r__xer__w.css';
import '../../css/j/jsqrbltyf.css';
import '../../css/e/e95dnts1f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bj827-b1b"/><path class="grci_abjh"/><path class="r__xer__w"/><path class="jsqrbltyf"/><path class="e95dnts1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:scanner-2-outline"} {...others} />);
}

export default Component;
