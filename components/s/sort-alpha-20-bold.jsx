import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0heepbom.css';
import '../../css/f/fusgjgx2r.css';
import '../../css/e/egctjry8w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d0heepbom"/><path class="fusgjgx2r"/><path class="egctjry8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sort-alpha-20-bold"} {...others} />);
}

export default Component;
