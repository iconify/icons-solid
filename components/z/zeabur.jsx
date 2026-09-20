import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2027-biw.css';
import '../../css/l/lgeglqbcu.css';
import '../../css/z/zy6utib6y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="p2027-biw"/><path class="lgeglqbcu"/><path class="zy6utib6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:zeabur"} {...others} />);
}

export default Component;
