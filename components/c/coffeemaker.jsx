import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lc9ekxb9y.css';
import '../../css/s/s62cm7iqs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lc9ekxb9y"/><path class="s62cm7iqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:coffeemaker"} {...others} />);
}

export default Component;
