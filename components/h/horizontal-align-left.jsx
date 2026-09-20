import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu9qfpjil.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mu9qfpjil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:horizontal-align-left"} {...others} />);
}

export default Component;
