import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7f8ufmsj.css';
import '../../css/b/bmz8mu02n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o7f8ufmsj"/><path class="bmz8mu02n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:geeftlist-light"} {...others} />);
}

export default Component;
