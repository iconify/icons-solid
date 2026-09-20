import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uy0-1xffp.css';
import '../../css/w/wou7f075w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uy0-1xffp"/><path class="wou7f075w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:corner-up-right-double"} {...others} />);
}

export default Component;
