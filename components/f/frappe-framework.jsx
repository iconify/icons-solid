import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v73ackb9u.css';
import '../../css/u/uwl1pssco.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v73ackb9u"/><path class="uwl1pssco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:frappe-framework"} {...others} />);
}

export default Component;
