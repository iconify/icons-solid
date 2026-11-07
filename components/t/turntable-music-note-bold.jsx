import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgzavdeog.css';
import '../../css/h/h5nyfzb8a.css';
import '../../css/i/i9po9cwhk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bgzavdeog"/><path class="h5nyfzb8a"/><path clip-rule="evenodd" class="i9po9cwhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:turntable-music-note-bold"} {...others} />);
}

export default Component;
