import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_3qcrb_p.css';
import '../../css/k/kb-ng1w_c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n_3qcrb_p"/><path clip-rule="evenodd" class="kb-ng1w_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:jinritoutiao"} {...others} />);
}

export default Component;
