import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzgwzi7wr.css';
import '../../css/s/s7ybahwbn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gzgwzi7wr"/><path class="s7ybahwbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:castopod"} {...others} />);
}

export default Component;
