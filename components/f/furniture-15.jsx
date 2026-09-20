import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vrwijsb_g.css';
import '../../css/t/t2wyy31bc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="vrwijsb_g"/><path class="t2wyy31bc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:furniture-15"} {...others} />);
}

export default Component;
