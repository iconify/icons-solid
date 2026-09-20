import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vz3zabchs.css';
import '../../css/p/pnow03huu.css';
import '../../css/c/cn5kjj8bc.css';
import '../../css/s/sdcfvbbsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vz3zabchs"/><path class="pnow03huu"/><path clip-rule="evenodd" class="cn5kjj8bc"/><path class="sdcfvbbsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:justice-scale-2-flat"} {...others} />);
}

export default Component;
