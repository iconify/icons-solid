import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezfumgw-x.css';
import '../../css/w/wp8azu9by.css';
import '../../css/k/knweaaczo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ezfumgw-x"><path class="wp8azu9by"/><path class="knweaaczo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:repeat-single"} {...others} />);
}

export default Component;
