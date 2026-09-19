import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/c/cb6gygfeh.css';
import '../../css/j/jt685qb_a.css';
import '../../css/u/utjnuocqx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="cb6gygfeh"/><path clip-rule="evenodd" class="jt685qb_a"/><path class="utjnuocqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:frame-alt"} {...others} />);
}

export default Component;
