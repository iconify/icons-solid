import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/b/brlrehbzr.css';
import '../../css/f/fpc2q4b0b.css';
import '../../css/n/nlp-xebet.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="brlrehbzr"/><path class="fpc2q4b0b"/><path class="nlp-xebet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:synchronize-loop"} {...others} />);
}

export default Component;
