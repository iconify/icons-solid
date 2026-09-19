import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sc7fzmsbi.css';
import '../../css/t/t4p58ib0k.css';
import '../../css/g/gv02961wk.css';
import '../../css/a/acfq-db-c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sc7fzmsbi"/><path class="t4p58ib0k"/><path class="gv02961wk"/><path class="acfq-db-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-crop"} {...others} />);
}

export default Component;
