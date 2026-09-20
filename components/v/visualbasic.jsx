import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/laiykvrmt.css';
import '../../css/g/gqsxbnbla.css';
import '../../css/s/swauynb5e.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="laiykvrmt"/><path class="gqsxbnbla"/><path class="swauynb5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:visualbasic"} {...others} />);
}

export default Component;
