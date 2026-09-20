import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m42sphumz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m42sphumz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:fill-color-filled"} {...others} />);
}

export default Component;
