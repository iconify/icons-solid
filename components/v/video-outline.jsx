import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rij7cdc-q.css';
import '../../css/f/f7j85k9vv.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="rij7cdc-q"/><path class="f7j85k9vv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:video-outline"} {...others} />);
}

export default Component;
