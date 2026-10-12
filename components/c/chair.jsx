import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cgrasfbvw.css';
import '../../css/e/ee3wzbb6u.css';
import '../../css/j/j8i9ym6gy.css';
import '../../css/n/nrsq3lpkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cgrasfbvw"/><path class="ee3wzbb6u"/><path class="j8i9ym6gy"/><path class="nrsq3lpkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chair"} {...others} />);
}

export default Component;
