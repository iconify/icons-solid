import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pssi10jzr.css';
import '../../css/g/gnsad6zcg.css';
import '../../css/e/enwgdw7qx.css';
import '../../css/u/urugr0b-r.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="pssi10jzr"/><path class="gnsad6zcg"/><path class="enwgdw7qx"/><path class="urugr0b-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:clojure"} {...others} />);
}

export default Component;
