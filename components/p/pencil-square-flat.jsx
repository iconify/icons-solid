import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p62y5wbmg.css';
import '../../css/w/wow7klb7u.css';
import '../../css/i/iskpd4wdz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="p62y5wbmg"/><path class="wow7klb7u"/><path class="iskpd4wdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:pencil-square-flat"} {...others} />);
}

export default Component;
