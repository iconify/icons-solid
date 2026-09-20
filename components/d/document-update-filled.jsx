import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c83uesblw.css';
import '../../css/e/eyx20b7zm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c83uesblw"/><path class="eyx20b7zm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:document-update-filled"} {...others} />);
}

export default Component;
