import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1p7bbcjd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c1p7bbcjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:code-fill"} {...others} />);
}

export default Component;
