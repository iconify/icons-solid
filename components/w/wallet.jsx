import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/i/i_-8rn_4z.css';
import '../../css/v/v_fpkcbui.css';
import '../../css/k/kcex68bds.css';
import '../../css/o/ofkzbwboa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path clip-rule="evenodd" class="i_-8rn_4z"/><path class="v_fpkcbui"/><path class="kcex68bds"/><path class="ofkzbwboa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:wallet"} {...others} />);
}

export default Component;
