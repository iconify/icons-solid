import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/holyfq_5n.css';
import '../../css/t/tcxsrfb_r.css';
import '../../css/p/p3i2zepvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="holyfq_5n"/><path class="tcxsrfb_r"/><path class="p3i2zepvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:olympics-off"} {...others} />);
}

export default Component;
