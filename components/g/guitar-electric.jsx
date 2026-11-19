import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xt-15vdxr.css';
import '../../css/n/ny8d3pgem.css';
import '../../css/a/a2geh5rsb.css';
import '../../css/t/t7hrxrv3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xt-15vdxr"/><path class="ny8d3pgem"/><path class="a2geh5rsb"/><path clip-rule="evenodd" class="t7hrxrv3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:guitar-electric"} {...others} />);
}

export default Component;
