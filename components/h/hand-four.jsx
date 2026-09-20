import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dd2xhk3go.css';
import '../../css/o/oaj_2iwov.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dd2xhk3go"/><path class="oaj_2iwov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:hand-four"} {...others} />);
}

export default Component;
