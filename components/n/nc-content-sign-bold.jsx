import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jt5f_tbao.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jt5f_tbao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:nc-content-sign-bold"} {...others} />);
}

export default Component;
