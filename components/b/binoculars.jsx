import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djrforfsc.css';
import '../../css/l/lylrjtb6a.css';
import '../../css/a/ak97f6bnh.css';
import '../../css/o/opwr92bel.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="djrforfsc wm-a"/><path class="lylrjtb6a wm-k"/><path class="ak97f6bnh wm-k"/><path class="opwr92bel wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:binoculars"} {...others} />);
}

export default Component;
