import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r-p5z9evf.css';
import '../../css/w/w38qwyopp.css';
import '../../css/j/jnij4gc1o.css';
import '../../css/o/obq5c3bpw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r-p5z9evf"/><path class="w38qwyopp"/><path class="jnij4gc1o"/><path class="obq5c3bpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:programming-language-html-5"} {...others} />);
}

export default Component;
