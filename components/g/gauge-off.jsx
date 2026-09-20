import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lrzhmvbrj.css';
import '../../css/a/adrgfei1r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lrzhmvbrj"/><path class="adrgfei1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:gauge-off"} {...others} />);
}

export default Component;
