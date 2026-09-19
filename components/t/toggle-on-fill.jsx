import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lxsqt2g8m.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lxsqt2g8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:toggle-on-fill"} {...others} />);
}

export default Component;
