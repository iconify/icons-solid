import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b80_6fw2e.css';
import '../../css/e/e1b0j_zzo.css';
import '../../css/u/u93vqe5st.css';
import '../../css/y/ymoffv9vo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b80_6fw2e"/><path class="e1b0j_zzo"/><path class="u93vqe5st"/><path class="ymoffv9vo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:hand-drag-1"} {...others} />);
}

export default Component;
