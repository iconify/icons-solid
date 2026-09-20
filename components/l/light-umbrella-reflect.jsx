import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tj8_542oq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tj8_542oq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:light-umbrella-reflect"} {...others} />);
}

export default Component;
