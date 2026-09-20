import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohtbhbbcu.css';
import '../../css/o/o598_n4he.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ohtbhbbcu"/><path class="o598_n4he"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-teams-2016"} {...others} />);
}

export default Component;
