import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7el2-bsl.css';

const viewBox = {"width":24,"height":25};
const content = `<path class="o7el2-bsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:cutlery-expressive"} {...others} />);
}

export default Component;
