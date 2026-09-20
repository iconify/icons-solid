import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsyjwjddq.css';
import '../../css/c/ctr08lbas.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="rsyjwjddq"/><path class="ctr08lbas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:trash"} {...others} />);
}

export default Component;
