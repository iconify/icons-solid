import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/crci5mbdb.css';
import '../../css/p/pr4470bgd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="crci5mbdb"/><path class="pr4470bgd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:delete"} {...others} />);
}

export default Component;
