import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/giq5sk66w.css';
import '../../css/y/yypjo3b2v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="giq5sk66w"/><path class="yypjo3b2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:download"} {...others} />);
}

export default Component;
