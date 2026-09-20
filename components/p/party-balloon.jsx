import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whegbnblt.css';
import '../../css/s/sd88ygcro.css';
import '../../css/x/xdjuqz9cw.css';
import '../../css/l/l7m2zxa8n.css';
import '../../css/q/qxzf2kb9z.css';
import '../../css/f/ffoxw6xbr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="whegbnblt"/><path class="sd88ygcro"/><path class="xdjuqz9cw"/><path class="l7m2zxa8n"/><path class="qxzf2kb9z"/><path class="ffoxw6xbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:party-balloon"} {...others} />);
}

export default Component;
