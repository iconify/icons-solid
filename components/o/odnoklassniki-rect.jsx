import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6riy61-f.css';

const viewBox = {"width":1000,"height":1000};
const content = `<path class="s6riy61-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:odnoklassniki-rect"} {...others} />);
}

export default Component;
