import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jctn5cbgl.css';
import '../../css/u/u87ezyb8f.css';
import '../../css/b/bnvy-8cvd.css';
import '../../css/m/ms0ci5but.css';
import '../../css/d/dynz7dbej.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jctn5cbgl"/><path class="u87ezyb8f"/><path class="bnvy-8cvd"/><path clip-rule="evenodd" class="ms0ci5but"/><path clip-rule="evenodd" class="dynz7dbej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:safe-2-bold"} {...others} />);
}

export default Component;
