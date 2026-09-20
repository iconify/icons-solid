import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5lfbgmeg.css';
import '../../css/c/cqafvmdbv.css';
import '../../css/w/whsz71boo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b5lfbgmeg"/><path class="cqafvmdbv"/><path clip-rule="evenodd" class="whsz71boo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:screen-duplicate"} {...others} />);
}

export default Component;
