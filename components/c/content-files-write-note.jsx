import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcq83re3x.css';
import '../../css/h/hokgamwpb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vcq83re3x"/><path class="hokgamwpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:content-files-write-note"} {...others} />);
}

export default Component;
