import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/asqs0ibvg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="asqs0ibvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:no-touch-sign-solid"} {...others} />);
}

export default Component;
