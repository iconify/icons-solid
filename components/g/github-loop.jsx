import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rharcy.css';
import '../../css/d/duw0fy.css';
import '../../css/a/a0m25c.css';
import '../../css/b/bmu-7y.css';
import '../../css/g/gzxsfm.css';
import '../../css/b/botfzx.css';
import '../../css/y/y-z56c7r.css';
import '../../css/s/so-from-32.css';
import '../../css/d/d-18l3_d.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGZ3PjieoC"><path class="rharcy"/><rect class="duw0fy"/></mask></defs><path class="a0m25c bmu-7y"/><path class="a0m25c gzxsfm"/><path mask="url(#SVGZ3PjieoC)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:github-loop"} {...others} />);
}

export default Component;
