import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/w/wfacx6kkn.css';
import '../../css/v/v71a0vb8l.css';
import '../../css/x/xqqjd7b7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="wfacx6kkn"/><path class="v71a0vb8l"/><path class="xqqjd7b7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:cloud-error-bold"} {...others} />);
}

export default Component;
