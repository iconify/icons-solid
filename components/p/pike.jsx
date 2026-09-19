import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vulxtnpzy.css';
import '../../css/d/dd6c-mb8w.css';
import '../../css/t/tzalp-b_a.css';
import '../../css/z/z1yhh2-zw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vulxtnpzy"/><path class="dd6c-mb8w"/><path class="tzalp-b_a"/><path class="z1yhh2-zw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:pike"} {...others} />);
}

export default Component;
