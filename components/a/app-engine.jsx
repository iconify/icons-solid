import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bm26asbdx.css';
import '../../css/x/x5gn8k1yk.css';
import '../../css/b/blp2wgbqz.css';
import '../../css/q/q8p3fcbkm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="bm26asbdx"/><path class="x5gn8k1yk"/><path class="blp2wgbqz"/><path class="q8p3fcbkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:app-engine"} {...others} />);
}

export default Component;
