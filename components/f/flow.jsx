import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kae0pfb-s.css';
import '../../css/b/b1i331bew.css';
import '../../css/f/fwlflpbis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kae0pfb-s"/><path class="b1i331bew"/><circle class="fwlflpbis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:flow"} {...others} />);
}

export default Component;
