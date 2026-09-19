import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/doe0tki7y.css';
import '../../css/m/m7pfecc5f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="doe0tki7y"/><path class="m7pfecc5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:badge-check"} {...others} />);
}

export default Component;
