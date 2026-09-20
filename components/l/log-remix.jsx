import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/us5-5pbfa.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="us5-5pbfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:log-remix"} {...others} />);
}

export default Component;
