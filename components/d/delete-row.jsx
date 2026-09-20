import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/u_mhe7b4u.css';
import '../../css/v/v539r36th.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="u_mhe7b4u"/><path class="v539r36th"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:delete-row"} {...others} />);
}

export default Component;
