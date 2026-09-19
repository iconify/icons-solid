import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z76d8-b2e.css';
import '../../css/d/d5m5uubwz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z76d8-b2e"/><path class="d5m5uubwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:checkbox-fill"} {...others} />);
}

export default Component;
