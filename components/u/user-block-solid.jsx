import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4m4zn7_l.css';
import '../../css/v/vawhvpbke.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z4m4zn7_l"/><path clip-rule="evenodd" class="vawhvpbke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:user-block-solid"} {...others} />);
}

export default Component;
