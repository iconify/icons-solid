import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at2dx1rbn.css';
import '../../css/y/ybmkikbnb.css';
import '../../css/t/tacxn8b_l.css';
import '../../css/i/ifaxhvbuy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="at2dx1rbn"><path class="ybmkikbnb"/><path class="tacxn8b_l"/><path class="ifaxhvbuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:navigation-left"} {...others} />);
}

export default Component;
