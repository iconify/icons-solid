import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axfhcvc4t.css';
import '../../css/z/z1mnl9v4i.css';
import '../../css/w/wh3qn5bfd.css';
import '../../css/e/e6p6b3szq.css';
import '../../css/i/iv5c0ud9c.css';
import '../../css/i/iwubpcv8e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="axfhcvc4t"/><path class="z1mnl9v4i"/><path class="wh3qn5bfd"/><path class="e6p6b3szq"/><path class="iv5c0ud9c"/><path class="iwubpcv8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:musicbrainz-picard"} {...others} />);
}

export default Component;
