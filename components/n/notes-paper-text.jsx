import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qa-m2weme.css';
import '../../css/n/nrwtk_bcf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qa-m2weme"/><path class="nrwtk_bcf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:notes-paper-text"} {...others} />);
}

export default Component;
