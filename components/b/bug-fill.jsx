import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/t/tag940w2q.css';
import '../../css/n/n9542da1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="tag940w2q"/><path class="n9542da1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:bug-fill"} {...others} />);
}

export default Component;
