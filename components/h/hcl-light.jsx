import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pw9st_b5f.css';
import '../../css/f/f7jhyeftq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pw9st_b5f"/><path class="f7jhyeftq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:hcl-light"} {...others} />);
}

export default Component;
