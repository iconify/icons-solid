import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b5qbfpbuf.css';
import '../../css/n/nhvgerb4l.css';
import '../../css/a/a4nuxyb-f.css';
import '../../css/t/tt-7ni6ag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="b5qbfpbuf"/><path class="nhvgerb4l"/><circle class="a4nuxyb-f"/><path class="tt-7ni6ag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:reverse-withdrawal-02"} {...others} />);
}

export default Component;
