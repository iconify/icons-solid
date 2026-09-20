import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qldwtj9yi.css';
import '../../css/v/v8mk5pbjq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qldwtj9yi"/><path class="v8mk5pbjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:sound-filled"} {...others} />);
}

export default Component;
