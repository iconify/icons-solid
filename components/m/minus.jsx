import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tj9892bvm.css';
import '../../css/w/wo110wbto.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="tj9892bvm"/><path class="wo110wbto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:minus"} {...others} />);
}

export default Component;
