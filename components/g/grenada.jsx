import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nq0tvgbdb.css';
import '../../css/k/k4bqlm3fz.css';
import '../../css/b/b8jgp1b3z.css';
import '../../css/e/eh6tksbbx.css';
import '../../css/m/moge_sejt.css';
import '../../css/g/gpv0tdbvf.css';
import '../../css/x/x6_3xiucy.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nq0tvgbdb"/><path class="k4bqlm3fz"/><path class="b8jgp1b3z"/><path class="eh6tksbbx"/><path class="moge_sejt"/><path class="gpv0tdbvf"/><path class="x6_3xiucy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:grenada"} {...others} />);
}

export default Component;
