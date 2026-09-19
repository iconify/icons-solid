import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbfhlu2aw.css';

const viewBox = {"width":1184,"height":1728};
const content = `<path class="xbfhlu2aw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:baby"} {...others} />);
}

export default Component;
