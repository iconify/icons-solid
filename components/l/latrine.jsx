import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m006cx35p.css';

const viewBox = {"width":22,"height":48};
const content = `<path class="m006cx35p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:latrine"} {...others} />);
}

export default Component;
