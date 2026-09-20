import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae22v_bnk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ae22v_bnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:comment-arrow-right-outline"} {...others} />);
}

export default Component;
