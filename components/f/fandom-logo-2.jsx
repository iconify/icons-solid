import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/z/ze865y8yg.css';
import '../../css/q/qykhsqbze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="ze865y8yg"/><path class="qykhsqbze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:fandom-logo-2"} {...others} />);
}

export default Component;
