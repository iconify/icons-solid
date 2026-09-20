import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fq7w7gbnw.css';
import '../../css/d/dm_tx1bzi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fq7w7gbnw"/><path class="dm_tx1bzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:logseq"} {...others} />);
}

export default Component;
