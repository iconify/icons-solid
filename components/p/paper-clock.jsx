import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egxi5i7oe.css';
import '../../css/e/e8uoipb2s.css';
import '../../css/i/i71zrdbzb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="egxi5i7oe"/><path class="e8uoipb2s"/><path clip-rule="evenodd" class="i71zrdbzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:paper-clock"} {...others} />);
}

export default Component;
