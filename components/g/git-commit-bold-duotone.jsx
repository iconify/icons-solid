import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/s/smghx7b8z.css';
import '../../css/c/cabat7cid.css';
import '../../css/v/vitartbbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="smghx7b8z"/><path class="cabat7cid"/></g><path class="vitartbbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:git-commit-bold-duotone"} {...others} />);
}

export default Component;
