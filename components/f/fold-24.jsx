import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-kcmxnus.css';
import '../../css/p/pm72mougk.css';
import '../../css/l/l7j3nibvv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j-kcmxnus"/><path class="pm72mougk"/><path class="l7j3nibvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:fold-24"} {...others} />);
}

export default Component;
