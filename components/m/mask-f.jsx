import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cz6r-y-dw.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6};
const content = `<path class="cz6r-y-dw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:mask-f"} {...others} />);
}

export default Component;
