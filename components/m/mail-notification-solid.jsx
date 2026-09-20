import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1ectnb4k.css';
import '../../css/t/ti-3o5bch.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g1ectnb4k"/><path class="ti-3o5bch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:mail-notification-solid"} {...others} />);
}

export default Component;
