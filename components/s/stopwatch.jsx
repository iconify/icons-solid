import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwcoh5b4b.css';
import '../../css/r/r-ls0rn8e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zwcoh5b4b"/><path class="r-ls0rn8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:stopwatch"} {...others} />);
}

export default Component;
