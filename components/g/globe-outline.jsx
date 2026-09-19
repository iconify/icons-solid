import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hof09nbzk.css';
import '../../css/t/t42cy5box.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hof09nbzk"/><path clip-rule="evenodd" class="t42cy5box"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:globe-outline"} {...others} />);
}

export default Component;
