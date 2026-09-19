import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nab6klb5t.css';
import '../../css/b/bdbr-nauf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nab6klb5t"/><path class="bdbr-nauf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:google"} {...others} />);
}

export default Component;
