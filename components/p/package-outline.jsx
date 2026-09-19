import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xj770uoak.css';
import '../../css/g/git7khw6g.css';
import '../../css/c/cnhnbbayd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="package-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="xj770uoak"/><path class="git7khw6g"/><path class="cnhnbbayd"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:package-outline"} {...others} />);
}

export default Component;
