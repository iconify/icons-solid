import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c385roevk.css';
import '../../css/v/va4-j6bnn.css';
import '../../css/m/mmk5vedsu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c385roevk"/><path class="va4-j6bnn"/><path class="mmk5vedsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:tut"} {...others} />);
}

export default Component;
