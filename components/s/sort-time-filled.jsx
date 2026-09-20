import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgk_62bzg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pgk_62bzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sort-time-filled"} {...others} />);
}

export default Component;
