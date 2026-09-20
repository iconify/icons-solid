import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dokkyccux.css';
import '../../css/v/v9abayici.css';
import '../../css/e/e_6u-efff.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="dokkyccux"/><path clip-rule="evenodd" class="v9abayici"/><path clip-rule="evenodd" class="e_6u-efff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:user-protection-check-flat"} {...others} />);
}

export default Component;
