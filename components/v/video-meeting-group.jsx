import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/x/x6zsqtbjm.css';
import '../../css/p/p8byw9pyu.css';
import '../../css/v/vfms9tbqm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="x6zsqtbjm"/><path class="p8byw9pyu"/><path class="vfms9tbqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:video-meeting-group"} {...others} />);
}

export default Component;
