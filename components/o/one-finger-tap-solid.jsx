import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7pv65znu.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="v7pv65znu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:one-finger-tap-solid"} {...others} />);
}

export default Component;
