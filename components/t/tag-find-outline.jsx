import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/coc31dbmj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="coc31dbmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:tag-find-outline"} {...others} />);
}

export default Component;
