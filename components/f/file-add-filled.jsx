import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/go41ypbnd.css';
import '../../css/q/quv6-_b5d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="go41ypbnd"/><path class="quv6-_b5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-add-filled"} {...others} />);
}

export default Component;
