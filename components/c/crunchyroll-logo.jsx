import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/k/ki547gwrl.css';
import '../../css/f/f14q9_01t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="ki547gwrl"/><path class="f14q9_01t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:crunchyroll-logo"} {...others} />);
}

export default Component;
