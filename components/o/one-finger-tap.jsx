import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cazdlossv.css';
import '../../css/r/r-ctesb4d.css';
import '../../css/v/v4m2mtt9b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="cazdlossv"/><path class="r-ctesb4d"/><path class="v4m2mtt9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:one-finger-tap"} {...others} />);
}

export default Component;
