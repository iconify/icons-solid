import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/enmz8v5ub.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="enmz8v5ub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:cargobike-and-rupee"} {...others} />);
}

export default Component;
