import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ld1e0bb3t.css';
import '../../css/f/frzki349x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ld1e0bb3t"/><path clip-rule="evenodd" class="frzki349x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:print-fill"} {...others} />);
}

export default Component;
