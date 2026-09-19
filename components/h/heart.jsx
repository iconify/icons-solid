import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5vq-i_qb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h5vq-i_qb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gridicons:heart"} {...others} />);
}

export default Component;
