import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sb46kvg1f.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="sb46kvg1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:empty-clipboard-solid"} {...others} />);
}

export default Component;
