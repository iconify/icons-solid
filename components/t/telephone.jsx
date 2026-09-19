import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ppvsq_uxf.css';
import '../../css/s/s-2t6oztj.css';
import '../../css/d/daco-tbph.css';
import '../../css/a/az8oswbvl.css';
import '../../css/q/qt7nybb1l.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ppvsq_uxf"/><path class="s-2t6oztj"/><path class="daco-tbph"/><path class="az8oswbvl"/><path class="qt7nybb1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:telephone"} {...others} />);
}

export default Component;
