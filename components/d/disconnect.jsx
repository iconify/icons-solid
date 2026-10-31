import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xnkx5ky_t.css';
import '../../css/q/qxlzy-bsz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xnkx5ky_t"/><path class="qxlzy-bsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:disconnect"} {...others} />);
}

export default Component;
