import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mvyl42ogw.css';
import '../../css/l/l252cwxrc.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="mvyl42ogw"/><path class="l252cwxrc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:creative-commons-sharealike"} {...others} />);
}

export default Component;
