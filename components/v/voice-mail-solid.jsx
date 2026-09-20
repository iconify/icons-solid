import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fns2kdljk.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="fns2kdljk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:voice-mail-solid"} {...others} />);
}

export default Component;
