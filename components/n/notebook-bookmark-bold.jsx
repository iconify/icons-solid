import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxxg4yb5u.css';
import '../../css/b/bfc02o_7t.css';
import '../../css/f/fjsi16b5u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vxxg4yb5u"/><path clip-rule="evenodd" class="bfc02o_7t"/><path class="fjsi16b5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notebook-bookmark-bold"} {...others} />);
}

export default Component;
