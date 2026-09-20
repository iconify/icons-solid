import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d9f6xob4i.css';
import '../../css/x/xckw_89zs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d9f6xob4i"/><path class="xckw_89zs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:feather-off"} {...others} />);
}

export default Component;
