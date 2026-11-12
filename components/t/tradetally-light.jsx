import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqzv3fbdd.css';
import '../../css/u/u7c96f_0y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nqzv3fbdd"/><path class="u7c96f_0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tradetally-light"} {...others} />);
}

export default Component;
