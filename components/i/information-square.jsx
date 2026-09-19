import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/b/b8twcu9qm.css';
import '../../css/y/y48rpdbyy.css';
import '../../css/v/v-zgfvbum.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="b8twcu9qm"/><path class="y48rpdbyy"/><path class="v-zgfvbum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:information-square"} {...others} />);
}

export default Component;
