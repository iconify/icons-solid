import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jca4lnd7d.css';
import '../../css/m/mwsfceayy.css';
import '../../css/f/f9n_6jbuq.css';
import '../../css/h/hvrzq_b9q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jca4lnd7d wm-k"/><path class="mwsfceayy wm-k"/><path class="f9n_6jbuq wm-a"/><path class="hvrzq_b9q wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:file-search"} {...others} />);
}

export default Component;
