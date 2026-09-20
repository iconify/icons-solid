import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tjpwy230b.css';
import '../../css/o/oogc20b8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tjpwy230b"/><path class="oogc20b8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:rosette-number-2"} {...others} />);
}

export default Component;
