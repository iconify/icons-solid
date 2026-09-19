import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvrx7uf1z.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vvrx7uf1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:rss-fill"} {...others} />);
}

export default Component;
