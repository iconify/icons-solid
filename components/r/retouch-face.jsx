import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6lsn5bzb.css';
import '../../css/j/j2c1c4b4t.css';
import '../../css/p/pyhe_fr8y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d6lsn5bzb"/><path class="j2c1c4b4t"/><path class="pyhe_fr8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:retouch-face"} {...others} />);
}

export default Component;
