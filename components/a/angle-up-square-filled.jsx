import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usm6v_bue.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="usm6v_bue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:angle-up-square-filled"} {...others} />);
}

export default Component;
