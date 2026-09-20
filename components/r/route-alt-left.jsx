import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vi_yw_71l.css';
import '../../css/r/r4-5n3bhs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vi_yw_71l"/><path class="r4-5n3bhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:route-alt-left"} {...others} />);
}

export default Component;
