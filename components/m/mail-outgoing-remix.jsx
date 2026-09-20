import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wu5e9je0u.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="wu5e9je0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:mail-outgoing-remix"} {...others} />);
}

export default Component;
