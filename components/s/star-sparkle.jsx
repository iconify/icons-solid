import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ia6mdpbwe.css';
import '../../css/x/xcai5v0mm.css';
import '../../css/o/o711sl-jp.css';
import '../../css/j/jnk9ko9jd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ia6mdpbwe"/><path class="xcai5v0mm"/><path class="o711sl-jp"/><circle class="jnk9ko9jd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:star-sparkle"} {...others} />);
}

export default Component;
