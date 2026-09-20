import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b5rh1hbct.css';
import '../../css/m/m98grhb7r.css';
import '../../css/a/aiwlczbmp.css';
import '../../css/p/pz33bbbdj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b5rh1hbct"/><path class="m98grhb7r"/><path class="aiwlczbmp"/><path class="pz33bbbdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:book-sound-audio"} {...others} />);
}

export default Component;
