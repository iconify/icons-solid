import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at07s5byk.css';
import '../../css/n/n3ikn2b4s.css';
import '../../css/b/b_3oa7bkg.css';
import '../../css/d/d5y5ipbmz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="at07s5byk"/><circle class="n3ikn2b4s"/><path class="b_3oa7bkg"/><path class="d5y5ipbmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:koreaflag"} {...others} />);
}

export default Component;
