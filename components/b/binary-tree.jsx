import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wk6elqb9g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wk6elqb9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:binary-tree"} {...others} />);
}

export default Component;
