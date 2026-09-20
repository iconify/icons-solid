import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzlkm6bkg.css';
import '../../css/u/u65lgdc6d.css';
import '../../css/m/msy7dmbdy.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="nzlkm6bkg"/><path class="u65lgdc6d"/><path class="msy7dmbdy"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:genderqueer"} {...others} />);
}

export default Component;
