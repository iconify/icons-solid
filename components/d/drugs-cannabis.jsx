import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gt5fh8bhm.css';
import '../../css/f/f08qtyb_s.css';
import '../../css/i/idumgubey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gt5fh8bhm"/><path class="f08qtyb_s"/><path class="idumgubey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:drugs-cannabis"} {...others} />);
}

export default Component;
