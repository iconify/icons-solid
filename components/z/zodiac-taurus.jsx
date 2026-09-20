import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xio3gdtsm.css';
import '../../css/e/eyhrnt-2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xio3gdtsm"/><path class="eyhrnt-2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:zodiac-taurus"} {...others} />);
}

export default Component;
