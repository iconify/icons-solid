import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gi4vrobsn.css';
import '../../css/p/p12hmpb2x.css';
import '../../css/u/u1u9i0blc.css';
import '../../css/z/z5uvadc1x.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="gi4vrobsn"/><path class="p12hmpb2x"/><path class="u1u9i0blc"/><path class="z5uvadc1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:black-nib"} {...others} />);
}

export default Component;
