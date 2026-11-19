import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/twagp-bia.css';
import '../../css/k/k_92ddbux.css';
import '../../css/b/b9f8urlxw.css';
import '../../css/k/kcrb_qb9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="twagp-bia"/><path class="k_92ddbux"/><path class="b9f8urlxw"/><path class="kcrb_qb9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-phone-wifi"} {...others} />);
}

export default Component;
