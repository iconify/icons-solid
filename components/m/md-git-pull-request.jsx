import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tkovc3a7g.css';
import '../../css/e/egti8_jds.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tkovc3a7g"/><path class="egti8_jds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-git-pull-request"} {...others} />);
}

export default Component;
