import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/phvznzb4o.css';
import '../../css/a/ami7r2bnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="phvznzb4o"/><path class="ami7r2bnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:external-link-duocolor-round"} {...others} />);
}

export default Component;
