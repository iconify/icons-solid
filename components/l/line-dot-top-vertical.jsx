import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nchdsi1wk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nchdsi1wk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:line-dot-top-vertical"} {...others} />);
}

export default Component;
