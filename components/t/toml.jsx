import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fm5-86ulh.css';
import '../../css/e/e_r59eb6y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fm5-86ulh"/><path class="e_r59eb6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:toml"} {...others} />);
}

export default Component;
