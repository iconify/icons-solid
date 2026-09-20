import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1og6cbek.css';
import '../../css/b/bh-4vfbma.css';
import '../../css/u/u5e77cb7g.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="p1og6cbek"/><path class="bh-4vfbma"/><path clip-rule="evenodd" class="u5e77cb7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mariadb"} {...others} />);
}

export default Component;
