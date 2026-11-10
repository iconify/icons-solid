import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wn3a7kb6v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wn3a7kb6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:oceanbase"} {...others} />);
}

export default Component;
