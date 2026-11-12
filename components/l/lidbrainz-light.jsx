import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gv017rgfy.css';
import '../../css/g/gk9fq7bun.css';
import '../../css/a/a0ch81bxw.css';
import '../../css/n/ntier-hqt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gv017rgfy"/><path class="gk9fq7bun"/><path class="a0ch81bxw"/><path class="ntier-hqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lidbrainz-light"} {...others} />);
}

export default Component;
