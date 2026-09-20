import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2zno77vb.css';

const viewBox = {"width":24,"height":24,"left":-2.5,"top":-6};
const content = `<path class="i2zno77vb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:switch-right-f"} {...others} />);
}

export default Component;
