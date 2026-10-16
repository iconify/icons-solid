import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e41ixubii.css';
import '../../css/q/qu273xbrm.css';
import '../../css/n/n4y4rsr7s.css';
import '../../css/k/k1zz3n-8j.css';
import '../../css/w/wjj97vb3u.css';

const viewBox = {"width":45,"height":45};
const content = `<g class="e41ixubii"><path class="qu273xbrm"/><path class="n4y4rsr7s"/><path class="k1zz3n-8j"/><path class="wjj97vb3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:checkmate"} {...others} />);
}

export default Component;
