import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zl88jpo7l.css';
import '../../css/z/zxbuae_pz.css';
import '../../css/m/mwad-08du.css';
import '../../css/b/b7y1tv8-w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zl88jpo7l"/><path class="zxbuae_pz"/><path class="mwad-08du"/><path class="b7y1tv8-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:add-to-playlist"} {...others} />);
}

export default Component;
