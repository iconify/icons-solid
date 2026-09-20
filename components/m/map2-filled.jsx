import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/no4_6ljhh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="no4_6ljhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:map2-filled"} {...others} />);
}

export default Component;
