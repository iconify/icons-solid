import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/b-2i9wm7w.css';
import '../../css/g/gpljrzhtf.css';
import '../../css/k/kaskpqbwl.css';
import '../../css/f/fzp86zbrb.css';
import '../../css/h/hwkx9sb3f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="b-2i9wm7w"/><path class="gpljrzhtf"/><path class="kaskpqbwl"/><path class="fzp86zbrb"/><path class="hwkx9sb3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:desktop-lock"} {...others} />);
}

export default Component;
