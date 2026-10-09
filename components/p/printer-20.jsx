import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9m217b_a.css';
import '../../css/a/azvvpmbsy.css';
import '../../css/h/hk39bac5y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r9m217b_a"/><path class="azvvpmbsy"/><path class="hk39bac5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:printer-20"} {...others} />);
}

export default Component;
