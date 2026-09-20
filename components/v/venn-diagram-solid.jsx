import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/um0u04m2u.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="um0u04m2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:venn-diagram-solid"} {...others} />);
}

export default Component;
