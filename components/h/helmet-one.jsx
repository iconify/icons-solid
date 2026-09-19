import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/nqk0mrsuo.css';
import '../../css/n/n16lh5xxw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="nqk0mrsuo"/><path class="n16lh5xxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:helmet-one"} {...others} />);
}

export default Component;
