import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c98at3bul.css';
import '../../css/z/z4-r-ybfy.css';
import '../../css/w/wifws7q6t.css';
import '../../css/r/rj9730bre.css';
import '../../css/z/z9r-fmfog.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c98at3bul"/><circle class="z4-r-ybfy"/><circle class="wifws7q6t"/><circle class="rj9730bre"/><circle class="z9r-fmfog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:dice-4"} {...others} />);
}

export default Component;
