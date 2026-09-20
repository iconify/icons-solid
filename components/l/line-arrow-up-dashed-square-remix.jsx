import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a772m_d8u.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="a772m_d8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:line-arrow-up-dashed-square-remix"} {...others} />);
}

export default Component;
