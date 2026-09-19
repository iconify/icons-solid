import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z6d6qdzqs.css';
import '../../css/a/asxhdcc8z.css';
import '../../css/q/qg2n9pbkz.css';
import '../../css/j/j3sro6chq.css';
import '../../css/c/c6tcmab-v.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="z6d6qdzqs"/><path class="asxhdcc8z"/><path class="qg2n9pbkz"/><path class="j3sro6chq"/><path class="c6tcmab-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:wheel"} {...others} />);
}

export default Component;
