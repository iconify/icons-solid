import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/haz025baf.css';
import '../../css/d/dwawwwbeu.css';
import '../../css/z/z42qdcbby.css';
import '../../css/w/wb8cm9-om.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="haz025baf"/><path class="dwawwwbeu"/><path class="z42qdcbby"/><path class="wb8cm9-om"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:unlink-minimalistic-bold"} {...others} />);
}

export default Component;
