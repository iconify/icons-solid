import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3id9cc6z.css';
import '../../css/r/rnnidvgdh.css';
import '../../css/u/ujiy1k0fw.css';
import '../../css/o/oempq5bbb.css';
import '../../css/i/ifpmew2at.css';
import '../../css/a/azg6glbpe.css';
import '../../css/h/h0v2nrbcm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="n3id9cc6z"/><path class="rnnidvgdh"/><path class="ujiy1k0fw"/><path class="oempq5bbb"/><path class="ifpmew2at"/><path class="azg6glbpe"/><path clip-rule="evenodd" class="h0v2nrbcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:the-rock"} {...others} />);
}

export default Component;
