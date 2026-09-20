import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xpg7rub1f.css';
import '../../css/k/kdhyjdb1z.css';
import '../../css/h/hpyhpmbke.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="xpg7rub1f"/><path class="kdhyjdb1z"/><path class="hpyhpmbke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:github-logo-1"} {...others} />);
}

export default Component;
