import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpgx4vb3u.css';
import '../../css/b/bdkmogxxu.css';
import '../../css/d/d2rrvbcjd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gpgx4vb3u"/><path class="bdkmogxxu"/><path class="d2rrvbcjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:run"} {...others} />);
}

export default Component;
