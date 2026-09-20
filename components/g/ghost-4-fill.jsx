import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/en88-6cnx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="en88-6cnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:ghost-4-fill"} {...others} />);
}

export default Component;
