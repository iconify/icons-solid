import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lenp-1-db.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lenp-1-db"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:book-open-fill-round"} {...others} />);
}

export default Component;
