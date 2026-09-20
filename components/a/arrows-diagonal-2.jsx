import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t9q90qrgb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t9q90qrgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrows-diagonal-2"} {...others} />);
}

export default Component;
