import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cfxu3bcbx.css';
import '../../css/i/i555kubjx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cfxu3bcbx"/><path class="i555kubjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:arrow-cycle"} {...others} />);
}

export default Component;
