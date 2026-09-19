import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6pk2lfov.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="f6pk2lfov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:text-bold"} {...others} />);
}

export default Component;
