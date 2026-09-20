import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/d/dyhmebbrg.css';
import '../../css/u/ub8jpuphi.css';
import '../../css/w/w-k3nsnnd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="dyhmebbrg"/><path class="ub8jpuphi"/><path class="w-k3nsnnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:flutter-logo"} {...others} />);
}

export default Component;
