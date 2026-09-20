import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6mw7_u3j.css';
import '../../css/b/bh0iywb-q.css';
import '../../css/l/lw9lwjj6z.css';
import '../../css/o/odd4djfjv.css';
import '../../css/x/xbi1hnbcv.css';
import '../../css/k/k74xy5b2h.css';
import '../../css/x/xgtswwb3b.css';
import '../../css/v/v3pwkfmdo.css';
import '../../css/i/ip8aogb0e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x6mw7_u3j"/><path class="bh0iywb-q"/><path class="lw9lwjj6z"/><path class="odd4djfjv"/><path class="xbi1hnbcv"/><path class="k74xy5b2h"/><path class="xgtswwb3b"/><path class="v3pwkfmdo"/><path class="ip8aogb0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:trilium-notes"} {...others} />);
}

export default Component;
