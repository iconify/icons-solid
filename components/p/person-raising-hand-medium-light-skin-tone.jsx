import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/slidqvbjz.css';
import '../../css/m/mb2rk1beu.css';
import '../../css/f/f-vk2irft.css';
import '../../css/s/sygkjib5u.css';
import '../../css/f/fl6f8bblp.css';
import '../../css/h/h6goflr8m.css';
import '../../css/f/fh6mpl1tp.css';
import '../../css/e/eka_p8bzq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="slidqvbjz"/><path class="mb2rk1beu"/><path class="f-vk2irft"/><path class="sygkjib5u"/><path class="fl6f8bblp"/><path class="h6goflr8m"/><path class="fh6mpl1tp"/><path class="eka_p8bzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-raising-hand-medium-light-skin-tone"} {...others} />);
}

export default Component;
