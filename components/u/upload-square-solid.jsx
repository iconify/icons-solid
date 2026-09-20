import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ht53eoboo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ht53eoboo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:upload-square-solid"} {...others} />);
}

export default Component;
