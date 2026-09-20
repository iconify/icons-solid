import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wp4_c_vog.css';
import '../../css/p/pswt3mbkl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wp4_c_vog"/><path clip-rule="evenodd" class="pswt3mbkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:sun-solid"} {...others} />);
}

export default Component;
