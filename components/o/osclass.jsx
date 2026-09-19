import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pf6w5_bfv.css';

const viewBox = {"width":1024,"height":896};
const content = `<path class="pf6w5_bfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:osclass"} {...others} />);
}

export default Component;
