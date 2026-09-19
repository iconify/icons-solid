import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ou6l10jcd.css';
import '../../css/d/dwxqe6b-u.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="ou6l10jcd"/><path class="dwxqe6b-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:clipboard-tick"} {...others} />);
}

export default Component;
