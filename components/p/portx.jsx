import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmtz-erdo.css';
import '../../css/z/z9hdrkb6h.css';
import '../../css/v/vzqbsgpvh.css';
import '../../css/e/e23x2926m.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zmtz-erdo"/><path clip-rule="evenodd" class="z9hdrkb6h"/><path class="vzqbsgpvh"/><path clip-rule="evenodd" class="e23x2926m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:portx"} {...others} />);
}

export default Component;
