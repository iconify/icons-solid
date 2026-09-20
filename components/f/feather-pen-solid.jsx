import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/syi5fcbki.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="syi5fcbki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:feather-pen-solid"} {...others} />);
}

export default Component;
