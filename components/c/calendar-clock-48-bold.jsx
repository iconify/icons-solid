import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2upil6xf.css';
import '../../css/z/zbtq--b8j.css';
import '../../css/u/uh6pk81zz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h2upil6xf"/><path class="zbtq--b8j"/><path class="uh6pk81zz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:calendar-clock-48-bold"} {...others} />);
}

export default Component;
