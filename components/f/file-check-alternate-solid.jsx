import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4bs_w5rn.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="l4bs_w5rn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:file-check-alternate-solid"} {...others} />);
}

export default Component;
