import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_ny3m6cp.css';
import '../../css/z/z_8t63-wg.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="f_ny3m6cp"/><rect class="z_8t63-wg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:stop-fill"} {...others} />);
}

export default Component;
