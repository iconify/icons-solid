import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lx7mb-bib.css';
import '../../css/z/zapq_sb9r.css';
import '../../css/y/y_knajrym.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lx7mb-bib"/><path class="zapq_sb9r"/><path class="y_knajrym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:wifi"} {...others} />);
}

export default Component;
