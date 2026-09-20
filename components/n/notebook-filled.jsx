import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/neh7qo-0n.css';
import '../../css/x/xs83kkb9k.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="neh7qo-0n"/><path class="xs83kkb9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:notebook-filled"} {...others} />);
}

export default Component;
