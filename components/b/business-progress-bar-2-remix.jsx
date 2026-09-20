import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fx8kvybnv.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="fx8kvybnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:business-progress-bar-2-remix"} {...others} />);
}

export default Component;
