import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbaayx07n.css';

const viewBox = {"width":1025,"height":896};
const content = `<path class="xbaayx07n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:nintendods"} {...others} />);
}

export default Component;
