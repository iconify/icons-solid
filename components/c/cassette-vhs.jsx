import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ru0c1ubqm.css';
import '../../css/x/x5bhhcb4p.css';
import '../../css/m/mr4a--b_a.css';
import '../../css/f/f89bribgd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ru0c1ubqm"/><path class="x5bhhcb4p"/><path class="mr4a--b_a"/><path class="f89bribgd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cassette-vhs"} {...others} />);
}

export default Component;
