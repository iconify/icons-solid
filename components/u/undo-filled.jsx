import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zn6c7gbdg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zn6c7gbdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:undo-filled"} {...others} />);
}

export default Component;
