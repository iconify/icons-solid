import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/so9k2acpo.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-1.5};
const content = `<path class="so9k2acpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:circle-f"} {...others} />);
}

export default Component;
