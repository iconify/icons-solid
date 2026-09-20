import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tq5ll3bvu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tq5ll3bvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:apache-couchdb"} {...others} />);
}

export default Component;
