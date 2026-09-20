import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ds7fe3bxn.css';
import '../../css/s/svj3x-59u.css';
import '../../css/p/p5evhgbgk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ds7fe3bxn"/><path clip-rule="evenodd" class="svj3x-59u"/><path class="p5evhgbgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:perp"} {...others} />);
}

export default Component;
