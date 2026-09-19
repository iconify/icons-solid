import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/z/zrw0yf_9t.css';
import '../../css/o/owxpt7uep.css';
import '../../css/s/sh1d9svju.css';
import '../../css/p/p5ptvr2an.css';
import '../../css/f/fa3yeylwq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="zrw0yf_9t"/><path class="owxpt7uep"/><path class="sh1d9svju"/><path class="p5ptvr2an"/><path class="fa3yeylwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:coffee-machine"} {...others} />);
}

export default Component;
