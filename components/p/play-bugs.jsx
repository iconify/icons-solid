import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zc_rhabrv.css';
import '../../css/g/gqxs2mwst.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zc_rhabrv"/><path class="gqxs2mwst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:play-bugs"} {...others} />);
}

export default Component;
