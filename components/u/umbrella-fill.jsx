import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2j0jum2c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a2j0jum2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:umbrella-fill"} {...others} />);
}

export default Component;
