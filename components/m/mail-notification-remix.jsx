import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgp00ubed.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="hgp00ubed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:mail-notification-remix"} {...others} />);
}

export default Component;
