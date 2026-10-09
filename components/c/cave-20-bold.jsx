import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fw792fgla.css';
import '../../css/d/dq1tynbis.css';
import '../../css/a/ale17-bkw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fw792fgla"/><path class="dq1tynbis"/><path class="ale17-bkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cave-20-bold"} {...others} />);
}

export default Component;
