import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kq9xq1nkv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kq9xq1nkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:help-square-filled"} {...others} />);
}

export default Component;
