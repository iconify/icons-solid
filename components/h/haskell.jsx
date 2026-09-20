import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ad53olvua.css';
import '../../css/z/zenn7i8an.css';
import '../../css/b/bi4q1fb5h.css';
import '../../css/d/dznxpfe5t.css';

const viewBox = {"width":300,"height":300};
const content = `<g class="ad53olvua"><path class="zenn7i8an"/><path class="bi4q1fb5h"/><path class="dznxpfe5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:haskell"} {...others} />);
}

export default Component;
