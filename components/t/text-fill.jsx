import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubs7q-uca.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ubs7q-uca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:text-fill"} {...others} />);
}

export default Component;
