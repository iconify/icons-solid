import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/t/th8c65bcd.css';
import '../../css/g/geroo2bsw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="th8c65bcd"/><path class="geroo2bsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:comment-dots"} {...others} />);
}

export default Component;
