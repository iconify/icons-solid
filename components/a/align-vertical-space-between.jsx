import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i2h9tmbip.css';
import '../../css/b/bswdohf5f.css';
import '../../css/d/dgdhsgi6q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="i2h9tmbip"/><rect class="bswdohf5f"/><path class="dgdhsgi6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:align-vertical-space-between"} {...others} />);
}

export default Component;
