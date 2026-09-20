import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hh9fonbif.css';
import '../../css/i/iqb1nzp3i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hh9fonbif"/><path class="iqb1nzp3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mautic"} {...others} />);
}

export default Component;
