import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/w/wuu1i6jkg.css';
import '../../css/l/lr7t7mjaw.css';
import '../../css/t/tdszk3itf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="wuu1i6jkg"/><path class="lr7t7mjaw"/><path class="tdszk3itf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:cloud-error-thin"} {...others} />);
}

export default Component;
