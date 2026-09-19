import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hjahfzb-f.css';
import '../../css/n/nb1ykgawv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hjahfzb-f"/><path class="nb1ykgawv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:leaf-sharp"} {...others} />);
}

export default Component;
