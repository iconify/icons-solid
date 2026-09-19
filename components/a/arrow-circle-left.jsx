import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xw0es_b_c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xw0es_b_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:arrow-circle-left"} {...others} />);
}

export default Component;
