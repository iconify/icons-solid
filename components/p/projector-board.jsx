import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zoyto6b2i.css';
import '../../css/a/ayv-kqbrs.css';
import '../../css/n/n_65bgbxo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zoyto6b2i"/><path class="ayv-kqbrs"/><path class="n_65bgbxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:projector-board"} {...others} />);
}

export default Component;
