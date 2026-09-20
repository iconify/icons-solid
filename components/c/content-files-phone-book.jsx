import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2jtlbtwq.css';
import '../../css/y/ykfflpb5w.css';
import '../../css/o/oakfhh70e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c2jtlbtwq"/><path class="ykfflpb5w"/><path class="oakfhh70e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:content-files-phone-book"} {...others} />);
}

export default Component;
