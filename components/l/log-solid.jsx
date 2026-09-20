import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ie_f_acfg.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="ie_f_acfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:log-solid"} {...others} />);
}

export default Component;
