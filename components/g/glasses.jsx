import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uivdmipwn.css';
import '../../css/n/n_b355bkp.css';
import '../../css/r/r9gvp-3-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="uivdmipwn"/><circle class="n_b355bkp"/><path class="r9gvp-3-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:glasses"} {...others} />);
}

export default Component;
