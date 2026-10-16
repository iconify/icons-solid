import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r316c7ztm.css';
import '../../css/a/a_svzjbjw.css';
import '../../css/v/vi87nrbfu.css';
import '../../css/d/dg8ajhi5w.css';
import '../../css/x/xp7ua7nkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="r316c7ztm"/><path class="a_svzjbjw"/><path class="vi87nrbfu"/><path class="dg8ajhi5w"/><path class="xp7ua7nkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:clock-sparkle"} {...others} />);
}

export default Component;
