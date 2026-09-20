import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xqmkvubyj.css';
import '../../css/u/u-qjejb8r.css';
import '../../css/k/kqj4zj76e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xqmkvubyj"/><path class="u-qjejb8r"/><path class="kqj4zj76e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:tractor"} {...others} />);
}

export default Component;
