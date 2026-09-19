import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zi62yk3_t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zi62yk3_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:align-right-filled"} {...others} />);
}

export default Component;
