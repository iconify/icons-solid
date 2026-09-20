import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rn0_e_zgk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rn0_e_zgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:incognito"} {...others} />);
}

export default Component;
