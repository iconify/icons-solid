import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gr06_6nqb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gr06_6nqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:smart-home-wash-machine"} {...others} />);
}

export default Component;
