import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ou6l10jcd.css';
import '../../css/n/n1ivvpblw.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="ou6l10jcd"/><path class="n1ivvpblw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:clipboard"} {...others} />);
}

export default Component;
