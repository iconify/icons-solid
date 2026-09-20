import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f3r6jjb4a.css';
import '../../css/e/eqzfz0yto.css';
import '../../css/z/zl639mb9w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f3r6jjb4a"/><rect class="eqzfz0yto"/><rect class="zl639mb9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:align-right"} {...others} />);
}

export default Component;
