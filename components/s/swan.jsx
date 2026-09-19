import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kzi_ombuh.css';
import '../../css/h/hon_1gb9u.css';
import '../../css/n/n6s0vvlpm.css';
import '../../css/z/zdb14ds8k.css';

const viewBox = {"width":32,"height":33};
const content = `<g class="ft5dv1b6b"><path class="kzi_ombuh"/><path class="hon_1gb9u"/><path class="n6s0vvlpm"/><path class="zdb14ds8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:swan"} {...others} />);
}

export default Component;
