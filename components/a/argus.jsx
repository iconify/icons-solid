import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbxkrlbja.css';
import '../../css/a/a7dps37by.css';
import '../../css/u/ubp-y7bxd.css';
import '../../css/z/zbkoumh9m.css';
import '../../css/s/sft5hp-6e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sbxkrlbja"/><ellipse class="a7dps37by"/><ellipse class="ubp-y7bxd"/><ellipse class="zbkoumh9m"/><ellipse class="sft5hp-6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:argus"} {...others} />);
}

export default Component;
