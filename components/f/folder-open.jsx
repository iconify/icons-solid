import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbrjnsjii.css';
import '../../css/x/xatleqcvm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bbrjnsjii"/><path class="xatleqcvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:folder-open"} {...others} />);
}

export default Component;
