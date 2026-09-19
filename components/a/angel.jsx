import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i_64shb3t.css';
import '../../css/c/crd3eebtk.css';
import '../../css/m/mnj2i1bgl.css';
import '../../css/v/v6ah-0brl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i_64shb3t"/><path class="crd3eebtk"/><ellipse class="mnj2i1bgl"/><path class="v6ah-0brl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:angel"} {...others} />);
}

export default Component;
