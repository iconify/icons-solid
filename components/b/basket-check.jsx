import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m435gnwno.css';
import '../../css/u/uvu00ibji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m435gnwno"/><path class="uvu00ibji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:basket-check"} {...others} />);
}

export default Component;
