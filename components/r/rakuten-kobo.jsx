import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ef0a_xk9q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ef0a_xk9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:rakuten-kobo"} {...others} />);
}

export default Component;
