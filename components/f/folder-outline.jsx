import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ui6f1wb4w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ui6f1wb4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:folder-outline"} {...others} />);
}

export default Component;
