import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/j/j8-9thbob.css';
import '../../css/z/zl-2pzb0a.css';
import '../../css/y/yt9q-fb4i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="j8-9thbob"/><path class="zl-2pzb0a"/><path class="yt9q-fb4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-division-square-bold"} {...others} />);
}

export default Component;
