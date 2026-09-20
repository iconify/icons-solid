import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xb7k0tb_c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xb7k0tb_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:radio-fill"} {...others} />);
}

export default Component;
