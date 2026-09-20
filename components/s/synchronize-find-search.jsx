import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/r/rq9ai-bto.css';
import '../../css/a/anwdr2sxy.css';
import '../../css/f/f5_n5vbkc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="rq9ai-bto"/><path class="anwdr2sxy"/><path class="f5_n5vbkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:synchronize-find-search"} {...others} />);
}

export default Component;
