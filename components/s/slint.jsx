import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/senz0-dsw.css';
import '../../css/b/bwz9z8l8m.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="senz0-dsw"/><path class="bwz9z8l8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:slint"} {...others} />);
}

export default Component;
