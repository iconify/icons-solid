import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjyyrubdb.css';
import '../../css/l/l0tnl8bcg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jjyyrubdb"/><path class="l0tnl8bcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:seelf"} {...others} />);
}

export default Component;
