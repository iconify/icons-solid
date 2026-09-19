import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/anms5nb2o.css';
import '../../css/c/c9e9qbbyb.css';
import '../../css/h/hbq5upbdg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="anms5nb2o"/><path class="c9e9qbbyb"/><path class="hbq5upbdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:mic-off-circle-outline"} {...others} />);
}

export default Component;
