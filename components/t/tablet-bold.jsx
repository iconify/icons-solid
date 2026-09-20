import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhzur0bgo.css';
import '../../css/u/u3tdfpecc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uhzur0bgo"/><path class="u3tdfpecc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:tablet-bold"} {...others} />);
}

export default Component;
