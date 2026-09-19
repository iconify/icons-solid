import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uivdmipwn.css';
import '../../css/n/n_b355bkp.css';
import '../../css/b/bsk_i7r2s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="uivdmipwn"/><circle class="n_b355bkp"/><path class="bsk_i7r2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:bicycle"} {...others} />);
}

export default Component;
