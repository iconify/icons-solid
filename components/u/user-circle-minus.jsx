import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k19r2xnlm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k19r2xnlm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:user-circle-minus"} {...others} />);
}

export default Component;
