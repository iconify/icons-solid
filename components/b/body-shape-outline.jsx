import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bnc4whb7q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bnc4whb7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:body-shape-outline"} {...others} />);
}

export default Component;
