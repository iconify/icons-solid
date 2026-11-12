import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uslf4acad.css';
import '../../css/p/pju2zkapd.css';
import '../../css/t/tvhnkin6o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uslf4acad"/><path class="pju2zkapd"/><path class="tvhnkin6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fenrus"} {...others} />);
}

export default Component;
