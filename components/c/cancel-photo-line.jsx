import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kk3ve9yfu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kk3ve9yfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:cancel-photo-line"} {...others} />);
}

export default Component;
