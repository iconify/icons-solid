import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dun1dyudb.css';
import '../../css/j/j48cmzb9x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dun1dyudb"/><path class="j48cmzb9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:system-blocked-filled"} {...others} />);
}

export default Component;
