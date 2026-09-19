import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pk5vftbnz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pk5vftbnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:mobile-clinic-24px"} {...others} />);
}

export default Component;
