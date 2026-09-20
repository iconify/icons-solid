import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv8r3jb8z.css';
import '../../css/m/m-whd2b6c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hv8r3jb8z"/><path clip-rule="evenodd" class="m-whd2b6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:widget-alt-1-fill"} {...others} />);
}

export default Component;
