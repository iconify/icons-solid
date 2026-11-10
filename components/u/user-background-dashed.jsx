import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ylacquqwe.css';
import '../../css/b/b6ogh3b9q.css';
import '../../css/s/sy3h8ftow.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ylacquqwe"/><path class="b6ogh3b9q"/><path class="sy3h8ftow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-background-dashed"} {...others} />);
}

export default Component;
