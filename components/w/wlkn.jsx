import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eibdgkb_a.css';
import '../../css/b/bk8xu6baj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="eibdgkb_a"/><path class="bk8xu6baj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:wlkn"} {...others} />);
}

export default Component;
