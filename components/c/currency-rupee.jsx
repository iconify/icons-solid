import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5ej_tn8a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x5ej_tn8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:currency-rupee"} {...others} />);
}

export default Component;
