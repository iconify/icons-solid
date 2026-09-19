import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd3mz9bes.css';
import '../../css/x/xn443qb_t.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="vd3mz9bes"/><path class="xn443qb_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:heels"} {...others} />);
}

export default Component;
