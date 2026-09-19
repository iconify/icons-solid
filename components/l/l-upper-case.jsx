import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imkwy3-et.css';

const viewBox = {"width":454,"height":735};
const content = `<path class="imkwy3-et"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:l-upper-case"} {...others} />);
}

export default Component;
