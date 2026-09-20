import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvdel6b_x.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gvdel6b_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:tattoo-machine"} {...others} />);
}

export default Component;
