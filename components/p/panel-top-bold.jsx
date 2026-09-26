import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pecu2cc1p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pecu2cc1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-top-bold"} {...others} />);
}

export default Component;
