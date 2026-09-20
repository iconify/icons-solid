import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jaazugmyj.css';
import '../../css/x/xrdm9cbye.css';
import '../../css/b/ba-wvclal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jaazugmyj"/><path class="xrdm9cbye"/><path class="ba-wvclal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:shopping-basket-3"} {...others} />);
}

export default Component;
