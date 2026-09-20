import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atxcznbro.css';
import '../../css/k/knpqz8bcw.css';
import '../../css/v/v93089bzn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="atxcznbro"/><ellipse class="knpqz8bcw"/><path class="v93089bzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:picture"} {...others} />);
}

export default Component;
