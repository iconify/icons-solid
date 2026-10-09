import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzaed-0-h.css';
import '../../css/z/z709enohq.css';
import '../../css/u/uqivdzdek.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uzaed-0-h"/><path class="z709enohq"/><path class="uqivdzdek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rov-48"} {...others} />);
}

export default Component;
