import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxkm8abvd.css';
import '../../css/q/qks1qac5c.css';
import '../../css/s/s0wk9pbhz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jxkm8abvd"/><path class="qks1qac5c"/><path class="s0wk9pbhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:truck-empty-1-bold"} {...others} />);
}

export default Component;
