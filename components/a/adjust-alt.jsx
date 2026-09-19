import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqsh6n6fl.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="oqsh6n6fl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:adjust-alt"} {...others} />);
}

export default Component;
