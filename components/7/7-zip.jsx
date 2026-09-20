import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to5yjxb9u.css';
import '../../css/f/fup3d72ec.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="to5yjxb9u"/><path class="fup3d72ec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:7-zip"} {...others} />);
}

export default Component;
