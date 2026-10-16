import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ef38vvb1i.css';
import '../../css/b/bic9zqbfw.css';
import '../../css/u/ufp1mnb9h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ef38vvb1i"/><path class="bic9zqbfw"/><path class="ufp1mnb9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:check-valve-20-bold"} {...others} />);
}

export default Component;
