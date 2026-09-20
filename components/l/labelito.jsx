import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z197esbqs.css';
import '../../css/p/pswsfxbhy.css';
import '../../css/r/ru9jsccjf.css';
import '../../css/h/hxvjidc_u.css';
import '../../css/u/ut_p-qbrc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z197esbqs"/><path class="pswsfxbhy"/><path class="ru9jsccjf"/><path class="hxvjidc_u"/><path class="ut_p-qbrc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:labelito"} {...others} />);
}

export default Component;
