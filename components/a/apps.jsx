import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6ieu0cyc.css';
import '../../css/z/z972og84a.css';
import '../../css/q/qy4unhbqf.css';
import '../../css/i/iy8nfbbzo.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="u6ieu0cyc"/><rect class="z972og84a"/><rect class="qy4unhbqf"/><rect class="iy8nfbbzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:apps"} {...others} />);
}

export default Component;
