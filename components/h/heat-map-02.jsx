import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqhxs-bpd.css';
import '../../css/i/i_n518bgj.css';
import '../../css/p/p31v-_b8t.css';
import '../../css/u/uz70800jt.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="oqhxs-bpd"/><circle class="i_n518bgj"/><circle class="p31v-_b8t"/><path class="uz70800jt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:heat-map-02"} {...others} />);
}

export default Component;
