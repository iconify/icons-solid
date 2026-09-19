import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/b/b8twcu9qm.css';
import '../../css/x/x3y1nc6-y.css';
import '../../css/h/hry82bbqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="b8twcu9qm"/><path class="x3y1nc6-y"/><path class="hry82bbqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:attention-square"} {...others} />);
}

export default Component;
