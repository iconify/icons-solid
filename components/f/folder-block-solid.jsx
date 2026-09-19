import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thcw70a2b.css';
import '../../css/v/vawhvpbke.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="thcw70a2b"/><path clip-rule="evenodd" class="vawhvpbke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:folder-block-solid"} {...others} />);
}

export default Component;
