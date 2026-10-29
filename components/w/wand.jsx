import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0j6bc41l.css';
import '../../css/v/v4gx96bzq.css';
import '../../css/f/fsiiu5bpg.css';
import '../../css/o/oncf8bcca.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0j6bc41l wm-k"/><path class="v4gx96bzq wm-k"/><path class="fsiiu5bpg wm-a"/><path class="oncf8bcca wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:wand"} {...others} />);
}

export default Component;
