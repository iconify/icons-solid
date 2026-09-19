import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xuu1fpbjf.css';
import '../../css/d/dxbj9hbfy.css';
import '../../css/v/vawhvpbke.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xuu1fpbjf"/><path class="dxbj9hbfy"/><path clip-rule="evenodd" class="vawhvpbke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:user-block-outline"} {...others} />);
}

export default Component;
