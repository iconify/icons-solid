import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/b/bh2l4mbds.css';
import '../../css/d/d7osp4bfk.css';
import '../../css/d/d23v9nbdb.css';
import '../../css/j/jel0ht30u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="bh2l4mbds"/><path class="d7osp4bfk"/><path class="d23v9nbdb"/><path class="jel0ht30u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:browser-error-404"} {...others} />);
}

export default Component;
