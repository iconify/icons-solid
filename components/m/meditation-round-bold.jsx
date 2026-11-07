import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wu0j3abrz.css';
import '../../css/p/p-sbw3baw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wu0j3abrz"/><path clip-rule="evenodd" class="p-sbw3baw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:meditation-round-bold"} {...others} />);
}

export default Component;
