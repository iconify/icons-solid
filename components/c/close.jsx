import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/opd2-3bgk.css';
import '../../css/u/uuunrrbso.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="opd2-3bgk"/><path class="uuunrrbso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:close"} {...others} />);
}

export default Component;
