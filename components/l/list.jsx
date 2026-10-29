import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvnjmgbvw.css';
import '../../css/g/gxpjv3bws.css';
import '../../css/b/b_mbvxopq.css';
import '../../css/d/db9bacbqt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qvnjmgbvw wm-shadow"/><path class="gxpjv3bws wm-k"/><path class="b_mbvxopq wm-a"/><path class="db9bacbqt wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:list"} {...others} />);
}

export default Component;
