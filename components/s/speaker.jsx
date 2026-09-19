import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/adl6mhr5s.css';
import '../../css/y/yp7nepsud.css';
import '../../css/z/zfrvxc26w.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="adl6mhr5s"/><path class="yp7nepsud"/><circle class="zfrvxc26w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:speaker"} {...others} />);
}

export default Component;
