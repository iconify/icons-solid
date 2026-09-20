import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mg4g494lb.css';
import '../../css/n/nguo7e5nb.css';
import '../../css/m/mel1zob-q.css';
import '../../css/t/tsnsws3qw.css';
import '../../css/a/aesxq4uuv.css';
import '../../css/x/x4vm8ebqh.css';
import '../../css/t/t7u1tghpc.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="mg4g494lb"/><rect class="nguo7e5nb"/><rect class="mel1zob-q"/><rect class="tsnsws3qw"/><rect class="aesxq4uuv"/><rect class="x4vm8ebqh"/><path class="t7u1tghpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:building"} {...others} />);
}

export default Component;
