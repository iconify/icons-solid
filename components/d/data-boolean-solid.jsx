import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eh1wx-cjl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="eh1wx-cjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:data-boolean-solid"} {...others} />);
}

export default Component;
