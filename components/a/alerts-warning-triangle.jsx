import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbdo17bye.css';
import '../../css/e/eag0spbkr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rbdo17bye"/><path class="eag0spbkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:alerts-warning-triangle"} {...others} />);
}

export default Component;
