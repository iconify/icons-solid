import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kybmr1v5g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kybmr1v5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:clipboard-medical-x"} {...others} />);
}

export default Component;
