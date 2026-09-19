import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/f/fx_zu3nnm.css';
import '../../css/w/wcd1gubhk.css';
import '../../css/f/fckz7lsnq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="fx_zu3nnm"/><path class="wcd1gubhk"/><path class="fckz7lsnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:information-square-bold"} {...others} />);
}

export default Component;
