import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e2f075blp.css';
import '../../css/i/i2smr173a.css';
import '../../css/m/mnsmfnpyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="e2f075blp"/><circle class="i2smr173a"/><path class="mnsmfnpyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:bell-pin-duotone-line"} {...others} />);
}

export default Component;
