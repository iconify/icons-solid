import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f32-ot3jq.css';
import '../../css/g/gxy-e0m8d.css';
import '../../css/b/bc9znburg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f32-ot3jq"/><path class="gxy-e0m8d"/><path class="bc9znburg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-vue-directives"} {...others} />);
}

export default Component;
