import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tst_x0jpw.css';
import '../../css/t/twmjonw6y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tst_x0jpw"/><path clip-rule="evenodd" class="twmjonw6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:image-play-filled"} {...others} />);
}

export default Component;
