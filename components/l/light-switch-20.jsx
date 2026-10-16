import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqfw9ounj.css';
import '../../css/u/uvq5nbclt.css';
import '../../css/j/jiuj5vb5b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gqfw9ounj"/><path class="uvq5nbclt"/><path class="jiuj5vb5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:light-switch-20"} {...others} />);
}

export default Component;
