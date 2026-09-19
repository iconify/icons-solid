import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bh7g0yt1l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bh7g0yt1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:format-indent-decrease"} {...others} />);
}

export default Component;
