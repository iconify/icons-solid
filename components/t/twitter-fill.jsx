import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gef5ck7od.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gef5ck7od"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:twitter-fill"} {...others} />);
}

export default Component;
