import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vsrq7dtpz.css';
import '../../css/o/oto4ucbif.css';
import '../../css/i/iek1ggn7p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vsrq7dtpz"/><path class="oto4ucbif"/><path class="iek1ggn7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:envelope-at"} {...others} />);
}

export default Component;
