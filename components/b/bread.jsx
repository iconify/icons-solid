import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pyvesm5kl.css';
import '../../css/c/c19d1kbnv.css';
import '../../css/n/njpuimyto.css';
import '../../css/d/dw998jgwv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pyvesm5kl"/><path class="c19d1kbnv"/><path class="njpuimyto"/><path class="dw998jgwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bread"} {...others} />);
}

export default Component;
