import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1a5awbwo.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="l1a5awbwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:passport-with-bundesadler"} {...others} />);
}

export default Component;
