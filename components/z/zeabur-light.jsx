import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-u7z_u-t.css';
import '../../css/l/lgeglqbcu.css';
import '../../css/z/zy6utib6y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="e-u7z_u-t"/><path class="lgeglqbcu"/><path class="zy6utib6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:zeabur-light"} {...others} />);
}

export default Component;
