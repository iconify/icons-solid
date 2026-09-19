import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/ul6gg1m4d.css';
import '../../css/s/sitb2ibko.css';
import '../../css/x/xs42-rkmr.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ul6gg1m4d"/><path class="sitb2ibko"/><path class="xs42-rkmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:taxi-print"} {...others} />);
}

export default Component;
