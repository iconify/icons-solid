import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o-ncbofqs.css';
import '../../css/s/s9uq5pb8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o-ncbofqs"/><path class="s9uq5pb8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-shared-02"} {...others} />);
}

export default Component;
