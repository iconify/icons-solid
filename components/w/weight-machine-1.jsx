import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eypp7rb0r.css';
import '../../css/a/a224fdcsz.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="eypp7rb0r"/><path clip-rule="evenodd" class="a224fdcsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:weight-machine-1"} {...others} />);
}

export default Component;
