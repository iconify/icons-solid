import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at4gmo0jk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="at4gmo0jk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:spinrilla-logo-solid"} {...others} />);
}

export default Component;
