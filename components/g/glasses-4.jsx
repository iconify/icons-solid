import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jeo8ykbru.css';
import '../../css/c/c3dnsxw2w.css';
import '../../css/x/xcw8oz5tq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jeo8ykbru"/><path class="c3dnsxw2w"/><path class="xcw8oz5tq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:glasses-4"} {...others} />);
}

export default Component;
