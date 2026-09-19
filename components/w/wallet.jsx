import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-8yqkjzv.css';
import '../../css/u/u3odm3brm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f-8yqkjzv"/><path class="u3odm3brm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:wallet"} {...others} />);
}

export default Component;
