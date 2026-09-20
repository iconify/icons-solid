import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdid5bc2g.css';
import '../../css/e/e_r59eb6y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="sdid5bc2g"/><path class="e_r59eb6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:toml-light"} {...others} />);
}

export default Component;
