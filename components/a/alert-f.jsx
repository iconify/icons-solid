import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzy6ww4uq.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-1.5};
const content = `<path class="tzy6ww4uq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:alert-f"} {...others} />);
}

export default Component;
