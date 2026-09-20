import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eoaml5x3t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eoaml5x3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:accessible-icon-alt"} {...others} />);
}

export default Component;
