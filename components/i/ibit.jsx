import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8rckdvqp.css';
import '../../css/n/n8-9h1f5h.css';
import '../../css/p/pojww1bbh.css';
import '../../css/a/abb0l1bch.css';
import '../../css/s/sstsa6bsh.css';
import '../../css/q/qssluzbwq.css';
import '../../css/t/tbjze_bky.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p8rckdvqp"/><path class="n8-9h1f5h"/><path class="pojww1bbh"/><path class="abb0l1bch"/><path class="sstsa6bsh"/><path class="qssluzbwq"/><path class="tbjze_bky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ibit"} {...others} />);
}

export default Component;
