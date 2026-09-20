import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v90gbqbox.css';
import '../../css/y/yfz3w9lrl.css';
import '../../css/t/t8ed8cb_k.css';
import '../../css/u/u85np2b1x.css';
import '../../css/s/subiqwbbi.css';
import '../../css/g/ghq3jv5in.css';
import '../../css/u/u8zxqedgz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="v90gbqbox"/><circle class="yfz3w9lrl"/><circle class="t8ed8cb_k"/><circle class="u85np2b1x"/><circle class="subiqwbbi"/><circle class="ghq3jv5in"/><path class="u8zxqedgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:ferris-wheel"} {...others} />);
}

export default Component;
