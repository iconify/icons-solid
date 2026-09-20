import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8cxt48ie.css';
import '../../css/g/gtrrgfidl.css';
import '../../css/h/h1cz9gxaz.css';
import '../../css/f/fajfv3krn.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e8cxt48ie"/><path class="gtrrgfidl"/><path class="h1cz9gxaz"/><circle class="fajfv3krn"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-samoa"} {...others} />);
}

export default Component;
