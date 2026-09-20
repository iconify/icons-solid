import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/loxbev73e.css';
import '../../css/x/xma1ufbac.css';
import '../../css/j/j5_j-i9ht.css';
import '../../css/a/aa6h0u40v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="loxbev73e"/><circle class="xma1ufbac"/><circle class="j5_j-i9ht"/><path class="aa6h0u40v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:android"} {...others} />);
}

export default Component;
