import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9cn4oz7w.css';
import '../../css/f/fjvn43bcd.css';
import '../../css/z/z9wzhbchn.css';
import '../../css/c/c0yojvukz.css';
import '../../css/f/fq48kswtk.css';
import '../../css/l/ljqy3wb-t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="h9cn4oz7w"/><path class="fjvn43bcd"/><path class="z9wzhbchn"/><path class="c0yojvukz"/><path class="fq48kswtk"/><path class="ljqy3wb-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:azure-pipelines"} {...others} />);
}

export default Component;
