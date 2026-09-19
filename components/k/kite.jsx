import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/arqg8jj_b.css';
import '../../css/o/oj4jiktks.css';
import '../../css/v/vmlcflbmj.css';
import '../../css/i/icrhsbbol.css';
import '../../css/k/ktkwnfb1k.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="arqg8jj_b"/><path class="oj4jiktks"/><path class="vmlcflbmj"/><path class="icrhsbbol"/><path class="ktkwnfb1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:kite"} {...others} />);
}

export default Component;
