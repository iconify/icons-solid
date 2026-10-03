import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjo3nrs0n.css';
import '../../css/r/re5vobc_g.css';

const viewBox = {"width":91.24,"height":42.97};
const content = `<path class="jjo3nrs0n"/><path class="re5vobc_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:lowes"} {...others} />);
}

export default Component;
