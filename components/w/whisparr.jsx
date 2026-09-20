import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j48h6jphd.css';
import '../../css/l/l9a7ocbbe.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="j48h6jphd"/><path class="l9a7ocbbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:whisparr"} {...others} />);
}

export default Component;
