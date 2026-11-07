import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_2iwlyqs.css';
import '../../css/x/x423rkfhu.css';
import '../../css/b/bsszosbtw.css';
import '../../css/g/gi95ag_hl.css';
import '../../css/l/l989-ektg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a_2iwlyqs"/><path class="x423rkfhu"/><path class="bsszosbtw"/><path class="gi95ag_hl"/><path class="l989-ektg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:scanner-outline"} {...others} />);
}

export default Component;
