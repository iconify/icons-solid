import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzha7kbwu.css';
import '../../css/r/rnxbpvbaa.css';
import '../../css/h/hailjd1lv.css';
import '../../css/s/spi_97b6j.css';
import '../../css/c/ch8ckb40s.css';
import '../../css/l/l7w7dzxmb.css';
import '../../css/y/y4y1ctl7s.css';
import '../../css/a/apusru8xp.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="lzha7kbwu"/><path class="rnxbpvbaa"/><path class="hailjd1lv"/><path class="spi_97b6j"/><path class="ch8ckb40s"/><path class="l7w7dzxmb"/><path class="y4y1ctl7s"/><path class="apusru8xp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cat-with-tears-of-joy"} {...others} />);
}

export default Component;
