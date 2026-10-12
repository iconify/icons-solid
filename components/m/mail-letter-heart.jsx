import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v7dh059pd.css';
import '../../css/g/glfxmynsd.css';
import '../../css/z/ztstzibly.css';
import '../../css/r/rax1kob-n.css';
import '../../css/i/iqrmk5p8o.css';
import '../../css/y/yuqebibhf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v7dh059pd"/><path class="glfxmynsd"/><path class="ztstzibly"/><path class="rax1kob-n"/><path class="iqrmk5p8o"/><path class="yuqebibhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-letter-heart"} {...others} />);
}

export default Component;
