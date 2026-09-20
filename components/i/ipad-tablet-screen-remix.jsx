import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfw785bdo.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="jfw785bdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:ipad-tablet-screen-remix"} {...others} />);
}

export default Component;
