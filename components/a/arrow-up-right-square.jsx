import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ej_ysgt9f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ej_ysgt9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:arrow-up-right-square"} {...others} />);
}

export default Component;
