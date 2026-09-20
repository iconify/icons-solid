import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4jtr84jk.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="b4jtr84jk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:dark-dislay-mode-remix"} {...others} />);
}

export default Component;
