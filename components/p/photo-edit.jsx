import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vu5b036-v.css';
import '../../css/e/eek54qtkc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vu5b036-v"/><path class="eek54qtkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-edit"} {...others} />);
}

export default Component;
