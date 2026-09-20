import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/d/dopnsf63r.css';
import '../../css/g/gf21tgjxp.css';
import '../../css/o/omsp-xbwp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="dopnsf63r"/><path class="gf21tgjxp"/><path class="omsp-xbwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:youtube-studio-logo"} {...others} />);
}

export default Component;
