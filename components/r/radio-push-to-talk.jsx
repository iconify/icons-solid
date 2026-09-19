import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/penxt_bky.css';
import '../../css/r/rdotspt7s.css';
import '../../css/r/rbk3mibcf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="penxt_bky"/><circle class="rdotspt7s"/><path class="rbk3mibcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:radio-push-to-talk"} {...others} />);
}

export default Component;
