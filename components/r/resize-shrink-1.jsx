import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/beb8anbww.css';
import '../../css/j/jd-oqlcip.css';
import '../../css/g/g9-1kgbkv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="beb8anbww"/><path class="jd-oqlcip"/><path class="g9-1kgbkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:resize-shrink-1"} {...others} />);
}

export default Component;
