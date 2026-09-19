import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c84kixjwr.css';
import '../../css/v/v1rze5qgh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="c84kixjwr"/><path class="v1rze5qgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:heavy-wind"} {...others} />);
}

export default Component;
