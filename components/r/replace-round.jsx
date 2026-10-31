import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bicxg5yuy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bicxg5yuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:replace-round"} {...others} />);
}

export default Component;
