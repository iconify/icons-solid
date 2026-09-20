import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uyzad1bsc.css';
import '../../css/l/l__qsac2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uyzad1bsc"/><path class="l__qsac2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clipboard-search"} {...others} />);
}

export default Component;
