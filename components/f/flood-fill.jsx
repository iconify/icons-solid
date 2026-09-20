import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5o58r39c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w5o58r39c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:flood-fill"} {...others} />);
}

export default Component;
