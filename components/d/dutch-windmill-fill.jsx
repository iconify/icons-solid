import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6wv1qb7h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x6wv1qb7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:dutch-windmill-fill"} {...others} />);
}

export default Component;
