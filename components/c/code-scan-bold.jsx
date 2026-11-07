import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bj827-b1b.css';
import '../../css/g/grci_abjh.css';
import '../../css/f/fm8m6izis.css';
import '../../css/h/h3ichbj0k.css';
import '../../css/m/mc3qlrb4j.css';
import '../../css/v/vuh948bbg.css';
import '../../css/j/jsqrbltyf.css';
import '../../css/e/e95dnts1f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bj827-b1b"/><path class="grci_abjh"/><path class="fm8m6izis"/><path class="h3ichbj0k"/><path class="mc3qlrb4j"/><path class="vuh948bbg"/><path class="jsqrbltyf"/><path class="e95dnts1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:code-scan-bold"} {...others} />);
}

export default Component;
