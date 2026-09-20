import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r4i1zib1d.css';
import '../../css/w/wu7510bky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r4i1zib1d"/><path class="wu7510bky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-check"} {...others} />);
}

export default Component;
