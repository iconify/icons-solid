import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iix9a7bjv.css';
import '../../css/z/z1zo10qgy.css';
import '../../css/a/a4vvybadx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="iix9a7bjv"/><path class="z1zo10qgy"/><path class="a4vvybadx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:gas-tank"} {...others} />);
}

export default Component;
