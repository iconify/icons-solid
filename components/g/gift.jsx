import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sxuhlh60t.css';
import '../../css/q/qw98xtb2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sxuhlh60t"/><rect class="qw98xtb2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:gift"} {...others} />);
}

export default Component;
