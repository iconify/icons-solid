import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kyb28ckrw.css';
import '../../css/k/khdkximwp.css';
import '../../css/k/kl6yteaiw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kyb28ckrw"/><path class="khdkximwp"/><path class="kl6yteaiw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:navigation-circle"} {...others} />);
}

export default Component;
