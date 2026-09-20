import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bdkeg8bno.css';
import '../../css/r/ro17tb5-g.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="bdkeg8bno"/><path class="ro17tb5-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:anyappstart"} {...others} />);
}

export default Component;
