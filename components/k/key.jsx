import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4vm18b5j.css';
import '../../css/b/bosvvnbsn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k4vm18b5j"/><path clip-rule="evenodd" class="bosvvnbsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:key"} {...others} />);
}

export default Component;
