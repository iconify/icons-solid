import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zpbd8hs9r.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zpbd8hs9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:gemini-ai"} {...others} />);
}

export default Component;
