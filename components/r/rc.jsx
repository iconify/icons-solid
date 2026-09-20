import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqo72weep.css';
import '../../css/h/h339_5zrx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pqo72weep"/><path class="h339_5zrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:rc"} {...others} />);
}

export default Component;
