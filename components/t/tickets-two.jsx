import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4wwxhbyk.css';
import '../../css/n/n30yiobyy.css';
import '../../css/a/axeg0dbth.css';
import '../../css/v/vatrexbak.css';
import '../../css/q/qznx_nb7p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlMH7oeYU"><g class="ft5dv1b6b"><path class="k4wwxhbyk"/><path class="n30yiobyy"/><circle class="axeg0dbth"/><circle class="vatrexbak"/><circle class="qznx_nb7p"/></g></mask></defs><path mask="url(#SVGlMH7oeYU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:tickets-two"} {...others} />);
}

export default Component;
