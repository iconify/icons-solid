import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g9c9wr01r.css';
import '../../css/r/rdsfeeb9x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="g9c9wr01r"/><path class="rdsfeeb9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:mdbook"} {...others} />);
}

export default Component;
