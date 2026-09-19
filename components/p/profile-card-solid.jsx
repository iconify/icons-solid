import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhw43hs6q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dhw43hs6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:profile-card-solid"} {...others} />);
}

export default Component;
