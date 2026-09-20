import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h5qo-acin.css';
import '../../css/i/i46k68_po.css';
import '../../css/j/j-4iesbnf.css';
import '../../css/y/ymcclky0z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="h5qo-acin"/><path class="i46k68_po"/><path class="j-4iesbnf"/><path class="ymcclky0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:banknote-line-duotone"} {...others} />);
}

export default Component;
