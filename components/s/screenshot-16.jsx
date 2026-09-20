import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gf0wplfja.css';
import '../../css/o/o9m46ebzt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gf0wplfja"/><path clip-rule="evenodd" class="o9m46ebzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:screenshot-16"} {...others} />);
}

export default Component;
