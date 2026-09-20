import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1sqqcc6o.css';
import '../../css/i/iwwx5ob6h.css';
import '../../css/c/c3vcymbtp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s1sqqcc6o"/><path class="iwwx5ob6h"/><path class="c3vcymbtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-kpaste-light"} {...others} />);
}

export default Component;
