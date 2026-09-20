import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tw55dhb3f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tw55dhb3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:signal-alt"} {...others} />);
}

export default Component;
