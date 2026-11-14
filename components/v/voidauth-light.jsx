import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onvqw7b7g.css';
import '../../css/l/l5bk2kpqe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="onvqw7b7g"/><path class="l5bk2kpqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:voidauth-light"} {...others} />);
}

export default Component;
