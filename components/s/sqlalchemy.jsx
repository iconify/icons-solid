import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5d9wu-vb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b5d9wu-vb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sqlalchemy"} {...others} />);
}

export default Component;
