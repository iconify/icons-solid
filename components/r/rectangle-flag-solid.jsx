import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/irpyohboj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="irpyohboj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:rectangle-flag-solid"} {...others} />);
}

export default Component;
