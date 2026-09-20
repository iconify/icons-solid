import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdakjyb5j.css';
import '../../css/f/f090v4_9j.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="vdakjyb5j"/><path class="f090v4_9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:bag-suitcase-4-solid"} {...others} />);
}

export default Component;
