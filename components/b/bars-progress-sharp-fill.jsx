import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ez-140r2i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ez-140r2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bars-progress-sharp-fill"} {...others} />);
}

export default Component;
