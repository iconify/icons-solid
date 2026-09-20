import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kt4ttcc3i.css';
import '../../css/a/apfenqdzs.css';
import '../../css/b/bh92dr6rn.css';
import '../../css/k/ka7j10y1i.css';
import '../../css/f/f8mawnu_e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kt4ttcc3i"/><path class="apfenqdzs"/><path class="bh92dr6rn"/><path class="ka7j10y1i"/><path class="f8mawnu_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:pumlx"} {...others} />);
}

export default Component;
