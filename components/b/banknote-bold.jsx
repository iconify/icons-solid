import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbi9b4b7j.css';
import '../../css/a/atape3b2j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hbi9b4b7j"/><path clip-rule="evenodd" class="atape3b2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:banknote-bold"} {...others} />);
}

export default Component;
