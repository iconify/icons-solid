import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmbhatbdg.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="kmbhatbdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:tune-adjust-volume-solid"} {...others} />);
}

export default Component;
