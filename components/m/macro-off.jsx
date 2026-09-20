import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ag8bvqgej.css';
import '../../css/o/o1680-biq.css';
import '../../css/q/qw5jhabtx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ag8bvqgej"/><path class="o1680-biq"/><path class="qw5jhabtx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:macro-off"} {...others} />);
}

export default Component;
