import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gbwx0nb3m.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="gbwx0nb3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:wireless-filled"} {...others} />);
}

export default Component;
