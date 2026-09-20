import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sduv6uq4w.css';
import '../../css/u/u1yvpnjhe.css';
import '../../css/z/zfk5qrblp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="sduv6uq4w"/><path class="u1yvpnjhe"/><path class="zfk5qrblp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:git-commit-linear"} {...others} />);
}

export default Component;
