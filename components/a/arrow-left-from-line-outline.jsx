import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmgit0fdl.css';
import '../../css/b/bfch-tf9f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qmgit0fdl"/><path class="bfch-tf9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-left-from-line-outline"} {...others} />);
}

export default Component;
