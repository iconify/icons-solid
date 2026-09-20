import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/axarcbb2r.css';
import '../../css/r/rikk_tbdt.css';
import '../../css/n/n1xy6nh9u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="axarcbb2r"/><circle class="rikk_tbdt"/><circle class="n1xy6nh9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:target"} {...others} />);
}

export default Component;
