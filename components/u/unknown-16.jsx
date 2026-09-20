import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv-d8hb5y.css';
import '../../css/o/o-uubwh4c.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hv-d8hb5y"/><path clip-rule="evenodd" class="o-uubwh4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:unknown-16"} {...others} />);
}

export default Component;
