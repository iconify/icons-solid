import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s2dfkk9hk.css';
import '../../css/a/a989ejbdj.css';
import '../../css/k/kzvrdrbrr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="s2dfkk9hk"/><path class="a989ejbdj"/><path class="kzvrdrbrr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shopping-basket-1"} {...others} />);
}

export default Component;
