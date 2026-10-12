import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ej-7496ya.css';
import '../../css/b/bbhbk04qj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ej-7496ya"/><path class="bbhbk04qj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hurricane-20"} {...others} />);
}

export default Component;
