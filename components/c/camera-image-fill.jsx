import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jew4uiv9f.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jew4uiv9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:camera-image-fill"} {...others} />);
}

export default Component;
