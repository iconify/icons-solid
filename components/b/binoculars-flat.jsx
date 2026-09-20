import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hjswtkbno.css';
import '../../css/m/m733xccyw.css';
import '../../css/s/s37n4zbqy.css';
import '../../css/u/utjd4yb7k.css';
import '../../css/s/sjwp1jk-y.css';
import '../../css/b/bg8pb5j0n.css';
import '../../css/t/teqs0se9c.css';
import '../../css/f/f1o6cwbld.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="hjswtkbno"/><path class="m733xccyw"/><path class="s37n4zbqy"/><path class="utjd4yb7k"/><path class="sjwp1jk-y"/><path class="bg8pb5j0n"/><path class="teqs0se9c"/><path clip-rule="evenodd" class="f1o6cwbld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:binoculars-flat"} {...others} />);
}

export default Component;
