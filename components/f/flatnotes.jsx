import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcbi2lbyp.css';
import '../../css/i/ixp_5jg3w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kcbi2lbyp"/><path class="ixp_5jg3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:flatnotes"} {...others} />);
}

export default Component;
