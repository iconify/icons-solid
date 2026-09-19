import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ub4d63l7m.css';
import '../../css/t/t7y87xbel.css';
import '../../css/d/d47xi2b9o.css';
import '../../css/h/h78w46vlh.css';

const viewBox = {"width":16,"height":16};
const content = `<circle class="ub4d63l7m"/><circle class="t7y87xbel"/><path class="d47xi2b9o"/><path class="h78w46vlh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:sad"} {...others} />);
}

export default Component;
