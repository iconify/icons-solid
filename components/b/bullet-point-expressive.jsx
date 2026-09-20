import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_txi0raq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_txi0raq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:bullet-point-expressive"} {...others} />);
}

export default Component;
