import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/okxtb_bme.css';
import '../../css/e/enbahc62i.css';
import '../../css/f/fipkdxbqo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="okxtb_bme"/><path clip-rule="evenodd" class="enbahc62i"/><path class="fipkdxbqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:printer-flat"} {...others} />);
}

export default Component;
