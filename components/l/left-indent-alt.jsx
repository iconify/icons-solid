import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ih0nrxghi.css';
import '../../css/q/qy6r87b-e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ih0nrxghi"/><path class="qy6r87b-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:left-indent-alt"} {...others} />);
}

export default Component;
