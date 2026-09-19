import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h835kxbil.css';
import '../../css/v/vi0k319by.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h835kxbil"/><path class="vi0k319by"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:toggle-left"} {...others} />);
}

export default Component;
