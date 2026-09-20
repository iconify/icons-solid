import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ul87ngb0i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ul87ngb0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:notebook-square-filled"} {...others} />);
}

export default Component;
