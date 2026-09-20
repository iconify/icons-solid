import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2ry_ybrz.css';
import '../../css/b/b9icdeqxn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s2ry_ybrz"/><path class="b9icdeqxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:envelope-flying"} {...others} />);
}

export default Component;
