import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jxl67pbry.css';
import '../../css/t/t0kpu6b6r.css';
import '../../css/x/xcwnt1qrn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="jxl67pbry"/><path class="t0kpu6b6r"/><path class="xcwnt1qrn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:atom"} {...others} />);
}

export default Component;
