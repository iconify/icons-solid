import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqfw9ounj.css';
import '../../css/i/ibxubn_yy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gqfw9ounj"/><path class="ibxubn_yy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dehumidifier-20"} {...others} />);
}

export default Component;
