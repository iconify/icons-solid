import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/w/w0ersef7o.css';
import '../../css/g/gob-zac-j.css';
import '../../css/t/tgdxgfbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="w0ersef7o"/><path class="gob-zac-j"/><path clip-rule="evenodd" class="tgdxgfbvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:uplabs-logo"} {...others} />);
}

export default Component;
