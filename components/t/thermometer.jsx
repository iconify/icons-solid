import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x72lhr09f.css';
import '../../css/l/lk2ofkevo.css';
import '../../css/p/phv42t7gn.css';
import '../../css/i/i4tp2acwn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="x72lhr09f"/><path class="lk2ofkevo"/><path class="phv42t7gn"/><path class="i4tp2acwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:thermometer"} {...others} />);
}

export default Component;
