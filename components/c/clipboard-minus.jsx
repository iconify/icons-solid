import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ibu_r4lcx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ibu_r4lcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:clipboard-minus"} {...others} />);
}

export default Component;
