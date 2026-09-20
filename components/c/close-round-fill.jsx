import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cbk_2kbbq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cbk_2kbbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:close-round-fill"} {...others} />);
}

export default Component;
