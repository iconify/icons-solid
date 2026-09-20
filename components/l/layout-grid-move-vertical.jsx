import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y2ls4efbx.css';
import '../../css/t/td4pmbm2c.css';
import '../../css/v/vbgobacsc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="y2ls4efbx"/><rect class="td4pmbm2c"/><path class="vbgobacsc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:layout-grid-move-vertical"} {...others} />);
}

export default Component;
