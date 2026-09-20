import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptycv73np.css';
import '../../css/d/d39hcpo6r.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ptycv73np"/><path class="d39hcpo6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:karma"} {...others} />);
}

export default Component;
