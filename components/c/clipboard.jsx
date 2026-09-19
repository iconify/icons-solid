import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ailzqs9ba.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/clsa-9bqs.css';
import '../../css/l/lcvnx1bva.css';

const viewBox = {"width":20,"height":20};
const content = `<defs><path id="iconify-CgctXtuA" class="ailzqs9ba"/></defs><g class="ft5dv1b6b"><path class="clsa-9bqs"/><use href="#iconify-CgctXtuA"/><path clip-rule="evenodd" class="lcvnx1bva"/><use href="#iconify-CgctXtuA"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:clipboard"} {...others} />);
}

export default Component;
