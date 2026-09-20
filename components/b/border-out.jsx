import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6ret3bta.css';
import '../../css/k/k1zg5jbzp.css';
import '../../css/s/sx_d_nlnk.css';
import '../../css/f/fc-nxccwx.css';
import '../../css/d/dq7yppiaz.css';
import '../../css/k/kr-tsdrut.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d6ret3bta"/><circle class="k1zg5jbzp"/><circle class="sx_d_nlnk"/><circle class="fc-nxccwx"/><circle class="dq7yppiaz"/><circle class="kr-tsdrut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:border-out"} {...others} />);
}

export default Component;
