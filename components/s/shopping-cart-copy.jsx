import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nnzq1t7sf.css';
import '../../css/m/mgzjqrb8f.css';
import '../../css/m/m0imz__js.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nnzq1t7sf"/><path class="mgzjqrb8f"/><path class="m0imz__js"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shopping-cart-copy"} {...others} />);
}

export default Component;
