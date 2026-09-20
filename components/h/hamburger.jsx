import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rzc42il7p.css';
import '../../css/x/xeuwd5bbt.css';
import '../../css/h/huilrub5x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rzc42il7p"/><rect class="xeuwd5bbt"/><path class="huilrub5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:hamburger"} {...others} />);
}

export default Component;
