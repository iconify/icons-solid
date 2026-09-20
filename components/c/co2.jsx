import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dd55jqb1l.css';
import '../../css/z/z7l2ccbgv.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="dd55jqb1l"/><path class="z7l2ccbgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:co2"} {...others} />);
}

export default Component;
