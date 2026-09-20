import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aochvebhn.css';
import '../../css/k/kxy6kzbos.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aochvebhn"/><path class="kxy6kzbos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:monetize"} {...others} />);
}

export default Component;
