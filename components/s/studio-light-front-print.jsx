import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/y/y_5hwsb8g.css';
import '../../css/l/l23ksbbbf.css';
import '../../css/l/lokrr0bju.css';
import '../../css/e/eblok7btk.css';
import '../../css/v/vydensavj.css';
import '../../css/d/d3wprkb4m.css';
import '../../css/c/cyyklsdvw.css';
import '../../css/s/sp4y4957o.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path clip-rule="evenodd" class="y_5hwsb8g"/><path clip-rule="evenodd" class="l23ksbbbf"/><path clip-rule="evenodd" class="lokrr0bju"/><path class="eblok7btk"/><path class="vydensavj"/></g><path clip-rule="evenodd" class="d3wprkb4m"/><path clip-rule="evenodd" class="cyyklsdvw"/><path clip-rule="evenodd" class="sp4y4957o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:studio-light-front-print"} {...others} />);
}

export default Component;
