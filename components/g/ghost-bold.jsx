import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c46eoqb3b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c46eoqb3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ghost-bold"} {...others} />);
}

export default Component;
