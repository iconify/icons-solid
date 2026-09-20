import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wpf-nzyty.css';
import '../../css/d/dnsg1cc1s.css';
import '../../css/k/k0f_c-0vt.css';
import '../../css/q/qlgwqvxft.css';
import '../../css/e/efjr4dval.css';
import '../../css/u/u4wnu4ryj.css';
import '../../css/f/ff177mb8y.css';
import '../../css/h/hl5tg5b5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wpf-nzyty"/><path class="dnsg1cc1s"/><path class="k0f_c-0vt"/><path class="qlgwqvxft"/><path class="efjr4dval"/><path class="u4wnu4ryj"/><path class="ff177mb8y"/><path class="hl5tg5b5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:postman-1"} {...others} />);
}

export default Component;
