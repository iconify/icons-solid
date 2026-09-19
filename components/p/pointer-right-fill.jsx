import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ppxr7-a6k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ppxr7-a6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:pointer-right-fill"} {...others} />);
}

export default Component;
