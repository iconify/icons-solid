import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_kvtnbmk.css';
import '../../css/u/u3aficb1b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s_kvtnbmk"/><path class="u3aficb1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:sign-out-fill"} {...others} />);
}

export default Component;
