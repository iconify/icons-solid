import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pyis771pa.css';
import '../../css/k/kfc9attts.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="pyis771pa"/><path class="kfc9attts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:slide2"} {...others} />);
}

export default Component;
