import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srs9hjd-l.css';
import '../../css/r/rgoxm-pmh.css';
import '../../css/p/p4vjspaxo.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="srs9hjd-l"/><path class="rgoxm-pmh"/><path class="p4vjspaxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hand-with-index-finger-and-thumb-crossed-medium-skin-tone"} {...others} />);
}

export default Component;
