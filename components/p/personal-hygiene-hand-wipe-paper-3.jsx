import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s3b_f7b5a.css';
import '../../css/x/xwz29bvle.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s3b_f7b5a"/><path class="xwz29bvle"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:personal-hygiene-hand-wipe-paper-3"} {...others} />);
}

export default Component;
