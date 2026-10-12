import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w8abz9scu.css';
import '../../css/f/fvu5o2blx.css';
import '../../css/n/na6gedbkw.css';
import '../../css/a/ahklu1bar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w8abz9scu"/><path class="fvu5o2blx"/><path class="na6gedbkw"/><path class="ahklu1bar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:printer"} {...others} />);
}

export default Component;
