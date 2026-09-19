import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x37y8kyft.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x37y8kyft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:file-image-fill"} {...others} />);
}

export default Component;
