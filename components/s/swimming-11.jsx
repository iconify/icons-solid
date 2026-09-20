import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfr4dsb0p.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="qfr4dsb0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:swimming-11"} {...others} />);
}

export default Component;
