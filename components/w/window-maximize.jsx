import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t42s_s5ie.css';
import '../../css/d/drovmgbqx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t42s_s5ie"/><path class="drovmgbqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:window-maximize"} {...others} />);
}

export default Component;
