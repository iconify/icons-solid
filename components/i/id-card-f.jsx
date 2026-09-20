import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8ckc_bwd.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-5.5};
const content = `<path class="i8ckc_bwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:id-card-f"} {...others} />);
}

export default Component;
