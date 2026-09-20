import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s0i2i7b5z.css';
import '../../css/c/c1si20bso.css';
import '../../css/z/zu2isd-ug.css';
import '../../css/j/jn7n1vaya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="s0i2i7b5z"/><path class="c1si20bso"/><circle class="zu2isd-ug"/><path class="jn7n1vaya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:whole-word"} {...others} />);
}

export default Component;
