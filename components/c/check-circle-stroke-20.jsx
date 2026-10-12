import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8oetz7xx.css';
import '../../css/f/fdag88jzj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m8oetz7xx"/><path class="fdag88jzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:check-circle-stroke-20"} {...others} />);
}

export default Component;
