import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7jffh02v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k7jffh02v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:cellular-network-5g-solid"} {...others} />);
}

export default Component;
