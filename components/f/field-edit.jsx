import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j8prztb3g.css';
import '../../css/y/y07hmhbic.css';
import '../../css/v/v7d6_i95l.css';
import '../../css/f/fxw7ambwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j8prztb3g"/><path class="y07hmhbic"/><rect transform="rotate(135 8.338 7.468)scale(-1 1)" class="v7d6_i95l"/><path class="fxw7ambwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:field-edit"} {...others} />);
}

export default Component;
